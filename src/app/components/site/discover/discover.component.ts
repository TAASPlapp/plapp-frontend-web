import { Component, OnInit } from '@angular/core';
import {Storyboard} from "../../../models/Storyboard";
import {Observable} from "rxjs";
import {SocialManagerService} from "../../../services/social-manager.service";

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {

  private storyboards:Observable<Storyboard[]>;
  private currentDate: Date = new Date();

  constructor(private service: SocialManagerService) { }

  ngOnInit() {

    this.storyboards = this.service.getAllStoryboards();



  }

  getMinutes(d1:Date){
    return this.currentDate.getMinutes()-d1.getMinutes();
  }

}
