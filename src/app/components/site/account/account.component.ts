import {Component, Input, OnInit} from '@angular/core';
import {UserDetails} from "../../../models/UserDetails";
import {UserService} from "../../../services/user-manage.service";
import {ActivatedRoute} from "@angular/router";
import {Storyboard} from "../../../models/Storyboard";
import {HttpResponse} from "@angular/common/http";
import {ApiResponse} from "../../../models/ApiResponse";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  userInfo: UserDetails;
  storyboard: Storyboard[];
  response: ApiResponse;
  userId: number;


  constructor(
    private service: UserService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params: any) => {
      if (params.id) {
        this.service.getUserInfo(params.id).subscribe(user => this.userInfo = user.content)
      }
    });
  }

  ngOnInit() {

    if (this.userId) {
      this.service.getUserInfo(this.userId).subscribe(user => this.userInfo = user.content);
    } else {
      this.service.getInfo().subscribe(user => this.userInfo = user.content);
    }


    this.service.getStoryboards(this.userInfo.userId).subscribe((s: Storyboard[]) => {
      this.storyboard = s;
    });


  }
}
