import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user-manage.service";
import {UserDetails} from "../../../models/UserDetails";
import {Observable} from "rxjs";
import {PushNotificationService} from "../../../services/push-notification.service";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  userInfo:UserDetails;
  messages;


  constructor(private service:UserService, private notification: PushNotificationService) {

  }

  ngOnInit() {
    this.notification.requestPermission();
    this.notification.receiveMessage();
    this.messages = this.notification.currentMessage;
    // this.messages.push(this.notification.currentMessage)

    this.service.getInfo().subscribe(user => this.userInfo = user)
  }

}
