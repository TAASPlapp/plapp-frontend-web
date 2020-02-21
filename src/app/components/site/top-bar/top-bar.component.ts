import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user-manage.service";
import {UserInfo} from "../../../models/UserInfo";
import {Observable} from "rxjs";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  userInfo:UserInfo;


  constructor(private service:UserService) {
  }

  ngOnInit() {
    this.service.getInfo().subscribe(user => this.userInfo = user)
  }


}
