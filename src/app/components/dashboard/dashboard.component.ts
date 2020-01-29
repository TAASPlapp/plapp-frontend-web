import { Component, OnInit } from '@angular/core';
import {SpringConnectService } from '../../services/spring-connect.service'
import { Example } from 'src/app/models/Example';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  exs:Example[];

  constructor(private spring:SpringConnectService) {}
  ngOnInit() {

    //use spring connect service -> subscribe for handle async request
    this.spring.connectToSpring().subscribe(examples =>{
      this.exs = examples;
    });

  }

}
