import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {StoryboardItem} from "../../../models/StoryboardItem";
import {ModalGalleryComponent} from "../modal-gallery/modal-gallery.component";
import {SocialManagerService} from "../../../services/social-manager.service";
import {NgbCarousel, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-carusel-storyboard',
  templateUrl: './carusel-storyboard.component.html',
  styleUrls: ['./carusel-storyboard.component.css']
})
export class CaruselStoryboardComponent implements OnInit, AfterViewInit {

  @Input() storyboardItems: StoryboardItem[];


  constructor(
    private service: SocialManagerService,
    private modalService: NgbModal,
  ) {
  }

  ngOnInit() {
  }

  @ViewChild('carousel', {static: false}) carousel: NgbCarousel;

  ngAfterViewInit() {
    this.carousel.pause();
  }

  open(item: StoryboardItem) {
    const modalRef = this.modalService.open(ModalGalleryComponent, {size: "xl", scrollable: true, centered: true});
    modalRef.componentInstance.item = item;

  }

}
