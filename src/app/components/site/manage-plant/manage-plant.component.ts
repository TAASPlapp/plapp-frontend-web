import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
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
import {NgxSpinnerService} from "ngx-spinner";


@Component({
    selector: 'app-manage-plant',
    templateUrl: './manage-plant.component.html',
    styleUrls: ['./manage-plant.component.css'],
    providers: [NgbCarouselConfig] // add NgbCarouselConfig to the component providers

})

export class ManagePlantComponent implements OnInit {
    plant: Plant;
    schedule: Schedule[];
    recommendation: PlantInfo;
    storyboard: Storyboard;
    storyboardItems: StoryboardItem[];
    articles: Article[] = [];
    storyboardDescription: string;

    maxArticles: number = 3;

    date: Date;
    isHealty: boolean = true;
    plantId: string;
    plantType: string;
    isSpinner = true;


    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: GreenhouseManageService,
        private bottomSheet: MatBottomSheet,
        private spinner: NgxSpinnerService,
    ) {
        this.date = new Date();
        this.route.paramMap.subscribe(params => {
            this.plantId = params.get('id')
        });
        this.route.queryParams.subscribe(params => {
            this.plantType = params['type']
        });
        this.showSpinner();
    }

    ngOnInit() {
        this.service.requestDataFromMultipleSources(this.plantId, this.plantType).subscribe(res => {
            this.plant = res[0].content;
            this.storyboard = res[1].content;
            this.storyboardItems = res[1].content.storyboardItems;
            this.storyboardDescription = res[1].content.summary;
            this.schedule = res[2].content;
            this.recommendation = res[3];
            this.articles = res[4].articles.splice(0, this.maxArticles);
            this.hideSpinner();
        });
    }

    openBottomSheet(): void {
        this.bottomSheet.open(AddScheduleComponent, {
            data: {plantId: this.plantId}
        });
    }


    openBottomSheetStoryboard(): void {
        this.bottomSheet.open(AddStoryboardItemComponent, {
            data: {plantId: this.plantId, storyboardId: this.storyboard.id}

        })
    }

    removeSchedule(schedule: Schedule) {
        this.service.removeSchedule(schedule);
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
