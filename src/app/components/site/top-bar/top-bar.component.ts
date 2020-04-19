import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user-manage.service";
import {UserDetails} from "../../../models/UserDetails";
import {PushNotificationService} from "../../../services/push-notification.service";
import {AuthService} from "../../../services/auth.service";
import {ApiResponse} from "../../../models/ApiResponse";
import {TokenStorageService} from "../../../services/token-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  userInfo:UserDetails;
  messages;


  constructor(
    private router: Router,
    private userService:UserService,
    private notification: PushNotificationService,
    private authService: AuthService,
    private tokenServie: TokenStorageService,
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
      this.tokenServie.signOut()
      this.router.navigate(['/auth'])
    });
  }
}
