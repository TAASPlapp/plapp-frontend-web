import { Component } from '@angular/core';
import {TokenStorageService} from "./services/token-storage.service";

@Component({
  // selector sarebbe il tag html a cui fa riferimento (auto with cli)
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private tokenStorageService: TokenStorageService){}


  ngOnInit() {
    this.tokenStorageService.getToken();
  }

}
