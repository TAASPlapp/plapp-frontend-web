import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user-manage.service";
import {UserDetails} from "../../../models/UserDetails";
import {Observable} from "rxjs";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  userInfo:UserDetails;


  constructor(private service:UserService) {
  }

  ngOnInit() {
    this.service.getInfo().subscribe(user => this.userInfo = user)
  }


}
