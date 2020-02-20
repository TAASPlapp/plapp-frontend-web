import {Component, OnInit} from '@angular/core';
import {switchMap} from 'rxjs/operators';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {Observable} from 'rxjs';


import {Plant} from "../../../models/Plant";
import {GreenhouseManageService} from "../../../services/greenhouse-manage.service";
import {Schedule} from "../../../models/Schedule";
import {PlantInfo} from "../../../models/PlantInfo";
import {AddScheduleComponent} from "./add-schedule/add-schedule.component";
import {MatBottomSheet} from "@angular/material/bottom-sheet";
import {Article} from "../../../models/Article";
import {NewsApiResponse} from "../../../models/NewsApiResponse";
import {AddStoryboardItemComponent} from "./add-storyboard-item/add-storyboard-item.component";
import {Storyboard} from "../../../models/Storyboard";

@Component({
  selector: 'app-manage-plant',
  templateUrl: './manage-plant.component.html',
  styleUrls: ['./manage-plant.component.css']
})

export class ManagePlantComponent implements OnInit {
  plant$: Observable<Plant>;
  schedule$: Observable<Schedule[]>;
  recommendation$: Observable<PlantInfo>;
  storyboardItems: Array<object>;
  articles: Article[];
  storyboardDescription: string;

  maxArticles: number = 3;

  date: Date;
  isHealty: boolean = true;
  plantID: string;
  plantType: string;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: GreenhouseManageService,
    private bottomSheet: MatBottomSheet,
  ) {
    this.date = new Date();
    this.route.paramMap.subscribe(params => {
      this.plantID = params.get('id')
    });
    this.route.queryParams.subscribe(params => {
      this.plantType = params['type']
    });

  }

  ngOnInit() {
    this.plant$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getPlant(params.get('id')))
    );
    this.schedule$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getSchedule(params.get('id')))
    );
    this.recommendation$ = this.route.queryParams.pipe(
      switchMap((params: ParamMap) =>
        this.service.getRecommended(params['type']))
    );

    //get news about the plant
    this.service.getRelatedArticles(this.plantType).subscribe((res: NewsApiResponse) => {
      this.articles = res.articles.splice(0, this.maxArticles);
    });
    this.service.getStoryboard(this.plantID).subscribe((res: Storyboard) => {
      console.log(res);
      this.storyboardItems = res.storyboardItems;
      this.storyboardDescription = res.summary;
    });

  }

  openBottomSheet(): void {
    this.bottomSheet.open(AddScheduleComponent, {
      data: {plantID: this.plantID}
    });
  }

  openBottomSheetStoryboard(): void {
    this.bottomSheet.open(AddStoryboardItemComponent, {
      data: {plantID: this.plantID}
    })
  }


}
