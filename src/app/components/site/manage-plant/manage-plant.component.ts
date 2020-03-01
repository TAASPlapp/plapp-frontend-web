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
import {StoryboardItem} from "../../../models/StoryboardItem";
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {ApiResponse} from "../../../models/ApiResponse";


@Component({
  selector: 'app-manage-plant',
  templateUrl: './manage-plant.component.html',
  styleUrls: ['./manage-plant.component.css'],
  providers: [NgbCarouselConfig] // add NgbCarouselConfig to the component providers

})

export class ManagePlantComponent implements OnInit {
  plant: Plant;
  schedule: Schedule[];
  recommendation$: Observable<PlantInfo>;
  storyboardItems: StoryboardItem[];
  articles: Article[] = [];
  storyboardDescription: string;

  maxArticles: number = 3;

  date: Date;
  isHealty: boolean = true;
  plantId: string;
  plantType: string;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: GreenhouseManageService,
    private bottomSheet: MatBottomSheet,
  ) {
    this.date = new Date();
    this.route.paramMap.subscribe(params => {
      this.plantId = params.get('id')
    });
    this.route.queryParams.subscribe(params => {
      this.plantType = params['type']
    });
  }

  ngOnInit() {

    this.recommendation$ = this.route.queryParams.pipe(
      switchMap((params: ParamMap) =>
        this.service.getRecommended(params['type']))
    );


    this.service.getPlant(this.plantId).subscribe(res =>{
      this.plant = res.content;
    });

    this.service.getSchedules(this.plantId).subscribe(res => {
      this.schedule = res.content;
    });

    //get news about the plant
    this.service.getRelatedArticles(this.plantType).subscribe((res: NewsApiResponse) => {
      this.articles = res.articles.splice(0, this.maxArticles);
    });

    this.service.getStoryboard(this.plantId).subscribe((res: ApiResponse) => {
      this.storyboardItems = res.content.storyboardItems;
      this.storyboardDescription = res.content.summary;
    });
  }

  openBottomSheet(): void {
    this.bottomSheet.open(AddScheduleComponent, {
      data: {plantId: this.plantId}
    });
  }


  openBottomSheetStoryboard(): void {
    this.bottomSheet.open(AddStoryboardItemComponent, {
      data: {plantId: this.plantId}
    })
  }

  removeSchedule(schedule: Schedule) {
    this.service.removeSchedule(schedule);
  }


}
