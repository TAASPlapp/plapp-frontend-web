import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {SocialManagerService} from "../../../services/social-manager.service";
import {Comment} from "../../../models/Comment";
import {StoryboardItem} from "../../../models/StoryboardItem";
import {MediaContentType} from "../../../models/MediaContentType";
import {UserDetails} from "../../../models/UserDetails";

@Component({
  selector: 'app-modal-gallery',
  templateUrl: './modal-gallery.component.html',
  styleUrls: ['./modal-gallery.component.css']
})
export class ModalGalleryComponent implements OnInit {
  @Input() item: StoryboardItem;


  private comments: Comment[];
  private likes: UserDetails[] = [];
  private enableWrite:Boolean = false;



  constructor(public activeModal: NgbActiveModal, private service:SocialManagerService) { }

  ngOnInit() {
    this.service.getComments(this.item.id, MediaContentType.StoryboardItem).subscribe(res =>{
      this.comments = res.content;
    });
    this.service.getLikes(this.item.id, MediaContentType.StoryboardItem).subscribe(res =>{
      this.likes = res.content
    })

  }

  writeComment() {
    this.enableWrite = !this.enableWrite
  }

}
