import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {Observable} from "rxjs";
import {SocialManagerService} from "../../../../services/social-manager.service";
import {Comment} from "../../../../models/Comment";

@Component({
  selector: 'app-modal-gallery',
  templateUrl: './modal-gallery.component.html',
  styleUrls: ['./modal-gallery.component.css']
})
export class ModalGalleryComponent implements OnInit {
  @Input() id;
  @Input() imageLink;
  @Input() numLikes;
  @Input() description;

  private comments$: Observable<Comment[]>;



  constructor(public activeModal: NgbActiveModal, private service:SocialManagerService) { }

  ngOnInit() {
    this.comments$ = this.service.getComments(this.id);

  }

}
