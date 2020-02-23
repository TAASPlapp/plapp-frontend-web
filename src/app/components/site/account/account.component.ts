import {Component, Input, OnInit} from '@angular/core';
import {UserDetails} from "../../../models/UserDetails";
import {UserService} from "../../../services/user-manage.service";
import {ActivatedRoute} from "@angular/router";
import {Storyboard} from "../../../models/Storyboard";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  userInfo: UserDetails;
  storyboard: Storyboard[];


  constructor(private service: UserService, private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.route.params.subscribe((params: any) => {
      if (params.id) {
        this.service.getUserInfo(params.id).subscribe(user => this.userInfo = user)
      } else {
        this.service.getInfo().subscribe(user => this.userInfo = user)
      }
    });


    this.service.getStoryboard(this.userInfo.userId).subscribe((s: Storyboard[]) => {
      this.storyboard = s;
    });


  }
}
