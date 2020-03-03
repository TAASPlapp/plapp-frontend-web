import {Component, Input, OnInit} from '@angular/core';
import {Comment} from "../../../models/Comment";
import {SocialManagerService} from "../../../services/social-manager.service";
import {MediaContentType} from "../../../models/MediaContentType";
import {UserDetails} from "../../../models/UserDetails";

@Component({
  selector: 'app-stroyboard-comments-component',
  templateUrl: './stroyboard-comments.component.html',
  styleUrls: ['./stroyboard-comments.component.css']
})
export class StroyboardCommentsComponent implements OnInit {


  @Input() storyboardId: number;
  private comments : Comment[];
  private likes: UserDetails[] = [];
  private enableWrite: Boolean = false;


  constructor(private socialManagerService: SocialManagerService) {
  }

  ngOnInit() {

    this.socialManagerService.getComments(this.storyboardId, MediaContentType.Storyboard).subscribe( res =>{
       this.comments = res.content;
    });

    this.socialManagerService.getLikes(this.storyboardId, MediaContentType.Storyboard).subscribe(res=>{
      this.likes = res.content;
    })

  }

  writeComment() {
    this.enableWrite = !this.enableWrite
  }



}
