import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Comment} from "../../../models/Comment";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() comment: Comment;
  @Input() activeModal : NgbActiveModal;


  constructor(
  ) {
  }

  ngOnInit() {
  }

  closeModal(){
    if(this.activeModal)
      this.activeModal.close()
  }
}
