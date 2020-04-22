import {Component, OnInit} from '@angular/core';
import {Storyboard} from "../../../models/Storyboard";
import {SocialManagerService} from "../../../services/social-manager.service";
import {NgxSpinnerService} from "ngx-spinner";
import {MediaContentType} from "../../../models/MediaContentType";

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {

  private storyboards: Storyboard[];
  private currentDate: Date = new Date();
  isSpinner: Boolean = true;
  private media = MediaContentType.Storyboard;


  constructor(
    private service: SocialManagerService,
    private spinner: NgxSpinnerService,
  ) {
    this.showSpinner()
  }

  ngOnInit() {
    this.service.getAllStoryboards().subscribe(res => {
      this.storyboards = res.content;
      this.hideSpinner();

    });
  }

  hideSpinner(): void {
    this.isSpinner = false;
    this.spinner.hide()
  }

  showSpinner(): void {
    this.spinner.show();
    this.isSpinner = true;
  }
}
