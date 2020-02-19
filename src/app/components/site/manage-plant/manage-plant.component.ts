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
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalGalleryComponent} from "./modal-gallery/modal-gallery.component";
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-manage-plant',
  templateUrl: './manage-plant.component.html',
  styleUrls: ['./manage-plant.component.css'],
  providers: [NgbCarouselConfig] // add NgbCarouselConfig to the component providers

})

export class ManagePlantComponent implements OnInit {
  plant$: Observable<Plant>;
  schedule$: Observable<Schedule[]>;
  recommendation$: Observable<PlantInfo>;
  storyboardItems: StoryboardItem[];
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
    private modalService: NgbModal,
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

  open(id:number, image:string, numLike:number, description:string) {
    const modalRef = this.modalService.open(ModalGalleryComponent, {size:"xl", scrollable:true, centered:true});
    modalRef.componentInstance.id = id;
    modalRef.componentInstance.imageLink = image;
    modalRef.componentInstance.numLikes = numLike;
    modalRef.componentInstance.description = description;



  }


}
