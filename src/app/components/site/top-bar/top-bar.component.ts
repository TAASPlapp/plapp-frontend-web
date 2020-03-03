import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user-manage.service";
import {UserDetails} from "../../../models/UserDetails";
import {Observable} from "rxjs";
import {PushNotificationService} from "../../../services/push-notification.service";
import {AuthService} from "../../../services/auth.service";
import {ApiResponse} from "../../../models/ApiResponse";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  userInfo:UserDetails;
  messages;


  constructor(
    private userService:UserService,
    private notification: PushNotificationService,
    private authService: AuthService
  ) {

  }

  ngOnInit() {
    this.notification.requestPermission();
    this.notification.receiveMessage();
    this.messages = this.notification.currentMessage;
    // this.messages.push(this.notification.currentMessage)

    this.userService.getInfo().subscribe(user => this.userInfo = user.content)
  }

  logout() {
    this.authService.logout().subscribe((res: ApiResponse) => {
      console.log(res.content)
    });
  }
}
