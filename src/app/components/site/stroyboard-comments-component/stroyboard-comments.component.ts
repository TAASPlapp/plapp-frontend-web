import {Component, Input, OnInit} from '@angular/core';
import {Comment} from "../../../models/Comment";
import {SocialManagerService} from "../../../services/social-manager.service";
import {MediaContentType} from "../../../models/MediaContentType";
import {UserDetails} from "../../../models/UserDetails";
import {Like} from "../../../models/Like";
import {UserService} from "../../../services/user-manage.service";

@Component({
    selector: 'app-stroyboard-comments-component',
    templateUrl: './stroyboard-comments.component.html',
    styleUrls: ['./stroyboard-comments.component.css']
})


export class StroyboardCommentsComponent implements OnInit {


    @Input() storyboardId: number;
    @Input() media: MediaContentType;
    private comments: Comment[];
    private likes: UserDetails[] = [];
    private enableWrite: Boolean = false;
    private comment: string = "";


    constructor(private socialManagerService: SocialManagerService,
                private userService: UserService) {
    }

    ngOnInit() {

        this.socialManagerService.getComments(this.storyboardId, MediaContentType.Storyboard).subscribe(res => {
            this.comments = res.content;
        });

        this.socialManagerService.getLikes(this.storyboardId, MediaContentType.Storyboard).subscribe(res => {
            this.likes = res.content;
        })

    }

    writeComment() {
        this.enableWrite = !this.enableWrite;
        let c: Comment = new Comment();
        this.userService.getInfo().subscribe(res => {
            c.author = res.content.userId
            c.content = this.comment;
            c.itemId = this.storyboardId
            c.mediaContentType = MediaContentType.Storyboard
            c.publishedAt = new Date()
            c.id = 1;
            this.socialManagerService.addComment(c).subscribe(res => {
                this.ngOnInit();
            });
        });

    }


    addLike() {
        console.log("LIKE")
        let l: Like = new Like()
        this.userService.getInfo().subscribe(res => {
            l.author = res.content.userId
            l.id = 1;
            l.itemId = this.storyboardId;
            l.mediaContentType = MediaContentType.Storyboard;
            l.publishedAt = new Date();
            this.socialManagerService.addLike(l).subscribe(res => {
                this.ngOnInit();
            });

        });

    }
}
