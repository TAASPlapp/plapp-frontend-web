import {Component, OnInit} from '@angular/core';
import {Plant} from "../../../models/Plant";
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {GreenhouseManageService} from "../../../services/greenhouse-manage.service";


@Component({
  selector: 'app-greenhouse',
  templateUrl: './greenhouse.component.html',
  styleUrls: ['./greenhouse.component.css']
})
export class GreenhouseComponent implements OnInit {
  plants: Plant[];
  selectedId: number;


  constructor(
    private service: GreenhouseManageService,
    private route: ActivatedRoute,
  ) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.selectedId = +params.get('id')
    });

    this.service.getAllPlants().subscribe(res => {
      this.plants = res.content;
    });
  }

}
