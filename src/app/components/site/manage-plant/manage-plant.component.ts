import {Component, OnInit} from '@angular/core';
import {switchMap} from 'rxjs/operators';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {Observable} from 'rxjs';


import {Plant} from "../../../models/Plant";
import {GreenhouseManageService} from "../../../services/greenhouse-manage.service";
import {Schedule} from "../../../models/Schedule";
import {PlantInfo} from "../../../models/PlantInfo";
import {AddScheduleComponent} from "../add-schedule/add-schedule.component";
import {MatBottomSheet} from "@angular/material/bottom-sheet";

@Component({
  selector: 'app-manage-plant',
  templateUrl: './manage-plant.component.html',
  styleUrls: ['./manage-plant.component.css']
})

export class ManagePlantComponent implements OnInit {
  plant$: Observable<Plant>;
  schedule$: Observable<Schedule[]>;
  recommendation$: Observable<PlantInfo>;
  date: Date;
  isHealty: boolean = true;
  plantID:string;

  imageObject: Array<object>;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: GreenhouseManageService,
    private bottomSheet: MatBottomSheet,
  ) {
    this.date = new Date();
    this.route.paramMap.subscribe(params=>{this.plantID = params.get('id')});
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

    //TODO: put this in a mock class
    this.imageObject = [{
      image: 'https://source.unsplash.com/n1Y2tKFvN1Y/600x800',
      thumbImage: 'https://source.unsplash.com/n1Y2tKFvN1Y/600x800',
      alt: 'alt of image',
      title: 'title of image'
    }, {
      image: 'https://source.unsplash.com/n1Y2tKFvN1Y/600x800', // Support base64 image
      thumbImage: 'https://source.unsplash.com/n1Y2tKFvN1Y/600x800', // Support base64 image
      title: 'Image title', //Optional: You can use this key if want to show image with title
      alt: 'Image alt' //Optional: You can use this key if want to show image with alt
    }, {
      image: 'https://source.unsplash.com/n1Y2tKFvN1Y/400x800', // Support base64 image
      thumbImage: 'https://source.unsplash.com/n1Y2tKFvN1Y/600x800', // Support base64 image
      title: 'Image title', //Optional: You can use this key if want to show image with title
      alt: 'Image alt' //Optional: You can use this key if want to show image with alt
    }, {
      image: 'https://source.unsplash.com/n1Y2tKFvN1Y/500x300', // Support base64 image
      thumbImage: 'https://source.unsplash.com/n1Y2tKFvN1Y/600x800', // Support base64 image
      title: 'Image title', //Optional: You can use this key if want to show image with title
      alt: 'Image alt' //Optional: You can use this key if want to show image with alt
    }, {
      image: 'https://source.unsplash.com/n1Y2tKFvN1Y/700x500', // Support base64 image
      thumbImage: 'https://source.unsplash.com/n1Y2tKFvN1Y/600x800', // Support base64 image
      title: 'Image title', //Optional: You can use this key if want to show image with title
      alt: 'Image alt' //Optional: You can use this key if want to show image with alt
    }, {
      image: 'https://source.unsplash.com/n1Y2tKFvN1Y/600x800', // Support base64 image
      thumbImage: 'https://source.unsplash.com/n1Y2tKFvN1Y/600x800', // Support base64 image
      title: 'Image title', //Optional: You can use this key if want to show image with title
      alt: 'Image alt' //Optional: You can use this key if want to show image with alt
    }, {
      image: 'https://source.unsplash.com/n1Y2tKFvN1Y/600x800', // Support base64 image
      thumbImage: 'https://source.unsplash.com/n1Y2tKFvN1Y/600x800', // Support base64 image
      title: 'Image title', //Optional: You can use this key if want to show image with title
      alt: 'Image alt' //Optional: You can use this key if want to show image with alt
    }
    ];

  }

  openBottomSheet(): void {
    this.bottomSheet.open(AddScheduleComponent, {
      data: {plantID: this.plantID}});
  }

}
