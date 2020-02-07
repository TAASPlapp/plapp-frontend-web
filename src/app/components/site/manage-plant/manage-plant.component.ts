import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import{Plant} from "../../../models/Plant";
import{GreenhouseManageService} from "../../../services/greenhouse-manage.service";
import {Schedule} from "../../../models/Schedule";

@Component({
  selector: 'app-manage-plant',
  templateUrl: './manage-plant.component.html',
  styleUrls: ['./manage-plant.component.css']
})

export class ManagePlantComponent implements OnInit {
  plant: Observable<Plant>;
  schedule: Observable<Schedule>;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: GreenhouseManageService,
  ) { }

  ngOnInit() {
    this.plant = this.route.paramMap.pipe(
      switchMap((params:ParamMap) =>
        this.service.getPlant(params.get('id')))
    );
    this.schedule = this.route.paramMap.pipe(
      switchMap((params:ParamMap) =>
        this.service.getSchedule(params.get('id')))
    );


  }

}
