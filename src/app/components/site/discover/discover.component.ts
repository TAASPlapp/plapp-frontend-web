import {Component, OnInit} from '@angular/core';
import {Storyboard} from "../../../models/Storyboard";
import {SocialManagerService} from "../../../services/social-manager.service";
// @ts-ignore
import {NgxSpinnerService} from "ngx-spinner";
import {MediaContentType} from "../../../models/MediaContentType";

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {

  public storyboards: Storyboard[];
  public currentDate: Date = new Date();
  public isSpinner: Boolean = true;
  public media = MediaContentType.Storyboard;


  constructor(
    private service: SocialManagerService,
    private spinner: NgxSpinnerService,
  ) {
    this.showSpinner()
  }

  ngOnInit() {
    this.service.getAllStoryboards().subscribe(res => {
      this.storyboards = res.content.reverse();
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
