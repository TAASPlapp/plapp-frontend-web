import {Component, Input, OnInit} from '@angular/core';
import {Comment} from "../../../models/Comment";
import {SocialManagerService} from "../../../services/social-manager.service";
import {MediaContentType} from "../../../models/MediaContentType";
import {UserDetails} from "../../../models/UserDetails";

@Component({
  selector: 'app-stroyboard-comments-component',
  templateUrl: './stroyboard-comments-component.component.html',
  styleUrls: ['./stroyboard-comments-component.component.css']
})
export class StroyboardCommentsComponentComponent implements OnInit {


  @Input() storyboardId: number;
  private comments : Comment[];
  private likes: UserDetails[];
  private enableWrite: Boolean = false;


  constructor(private socialManagerService: SocialManagerService) {
  }

  ngOnInit() {

    //TODO: ritorna api, quindi modificare
    this.socialManagerService.getComments(this.storyboardId, MediaContentType.Storyboard).subscribe( res =>{
       this.comments = res.content
      console.log(res.content)
    });
    this.socialManagerService.getLikes(this.storyboardId, MediaContentType.Storyboard).subscribe(res=>{
      this.likes = res.content
      console.log(res)
    })

  }

  writeComment() {
    this.enableWrite = !this.enableWrite
  }



}
