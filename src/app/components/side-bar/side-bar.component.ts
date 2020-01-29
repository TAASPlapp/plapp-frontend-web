import { Component, OnInit } from '@angular/core';
import { Example } from '../../models/Example'


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  exs:Example[];

  constructor() { }

  ngOnInit() {
    this.exs = [
      {
        id:12,
        name:'ciao',
        age:21,
        active:true
      }
    ]
  }

}
