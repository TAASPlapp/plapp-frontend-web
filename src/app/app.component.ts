import { Component } from '@angular/core';
import {TokenStorageService} from "./services/token-storage.service";

@Component({
  // selector sarebbe il tag html a cui fa riferimento (auto with cli)
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private isLoggedIn = false;
  private username: string;



  constructor(private tokenStorageService: TokenStorageService){}


  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.username = user.username;
    }
  }
  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
