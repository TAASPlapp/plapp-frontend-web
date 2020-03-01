import {Component, OnInit} from '@angular/core';
import {Storyboard} from "../../../models/Storyboard";
import {SocialManagerService} from "../../../services/social-manager.service";

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {

  private storyboards: Storyboard[];
  private currentDate: Date = new Date();

  constructor(
    private service: SocialManagerService,
  ) {
  }

  ngOnInit() {
    this.service.getAllStoryboards().subscribe(res =>{
      this.storyboards = res.content
    });


  }



}
