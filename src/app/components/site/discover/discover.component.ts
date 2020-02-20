import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Storyboard} from "../../../models/Storyboard";
import {Observable} from "rxjs";
import {SocialManagerService} from "../../../services/social-manager.service";
import {NgbCarousel, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalGalleryComponent} from "../modal-gallery/modal-gallery.component";
import {StoryboardItem} from "../../../models/StoryboardItem";

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {

  private storyboards: Observable<Storyboard[]>;
  private currentDate: Date = new Date();

  constructor(
    private service: SocialManagerService,
  ) {
  }

  ngOnInit() {
    this.storyboards = this.service.getAllStoryboards();
  }


}
