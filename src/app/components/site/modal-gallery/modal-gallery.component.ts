import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {SocialManagerService} from "../../../services/social-manager.service";
import {Comment} from "../../../models/Comment";
import {StoryboardItem} from "../../../models/StoryboardItem";
import {MediaContentType} from "../../../models/MediaContentType";
import {UserDetails} from "../../../models/UserDetails";
import {Like} from "../../../models/Like";
import {UserService} from "../../../services/user-manage.service";

@Component({
    selector: 'app-modal-gallery',
    templateUrl: './modal-gallery.component.html',
    styleUrls: ['./modal-gallery.component.css']
})
export class ModalGalleryComponent implements OnInit {
    @Input() item: StoryboardItem;


    private comments: Comment[];
    private likes: UserDetails[] = [];
    private enableWrite: Boolean = false;
    private comment: string = "";



    constructor(public activeModal: NgbActiveModal,
                private socialManagerService: SocialManagerService,
                private userService: UserService) {
    }

    ngOnInit() {
        this.socialManagerService.getComments(this.item.id, MediaContentType.StoryboardItem).subscribe(res => {
            this.comments = res.content;
        });
        this.socialManagerService.getLikes(this.item.id, MediaContentType.StoryboardItem).subscribe(res => {
            this.likes = res.content
        })

    }


    writeComment() {
        this.enableWrite = !this.enableWrite;
        let c: Comment = new Comment();
        this.userService.getInfo().subscribe(res => c.author = res.content.userId);
        c.content = this.comment;
        c.itemId = this.item.id;
        c.mediaContentType = MediaContentType.StoryboardItem;
        c.publishedAt = new Date();
        c.id = 1;
        this.socialManagerService.addComment(c).subscribe(res => {
            console.log(res.success)
        });
    }


    addLike() {
        console.log("LIKE")
        let l: Like = new Like()
        this.userService.getInfo().subscribe(res => l.author = res.content.userId);
        l.id = 1;
        l.itemId = this.item.id;
        l.mediaContentType = MediaContentType.StoryboardItem;
        l.publishedAt = new Date();
        this.socialManagerService.addLike(l).subscribe(res => {
            console.log(res.success)
        });
    }

}
