import {Component, OnInit} from '@angular/core';
import {Plant} from "../../../models/Plant";
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {GreenhouseManageService} from "../../../services/greenhouse-manage.service";
import {NgxSpinnerService} from "ngx-spinner";


@Component({
  selector: 'app-greenhouse',
  templateUrl: './greenhouse.component.html',
  styleUrls: ['./greenhouse.component.css']
})
export class GreenhouseComponent implements OnInit {
  plants: Plant[];
  isSpinner: Boolean = true;
  selectedId: number;


  constructor(
    private service: GreenhouseManageService,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
  ) {
    this.showSpinner();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.selectedId = +params.get('id')
    });

    this.service.getAllPlants().subscribe(res => {
      this.plants = res.content;
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
