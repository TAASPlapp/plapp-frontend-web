import {Component, OnInit} from '@angular/core';
import {Storyboard} from "../../../models/Storyboard";
import {Observable} from "rxjs";
import {SocialManagerService} from "../../../services/social-manager.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalGalleryComponent} from "../manage-plant/modal-gallery/modal-gallery.component";

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
    private modalService: NgbModal,
  ) {
  }

  ngOnInit() {
    this.storyboards = this.service.getAllStoryboards();
  }







  open(id:number, image:string, numLike:number, description:string) {
    const modalRef = this.modalService.open(ModalGalleryComponent, {size:"xl", scrollable:true, centered:true});
    modalRef.componentInstance.id = id;
    modalRef.componentInstance.imageLink = image;
    modalRef.componentInstance.numLikes = numLike;
    modalRef.componentInstance.description = description;



  }

}
