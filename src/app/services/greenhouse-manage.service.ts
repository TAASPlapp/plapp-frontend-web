import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';
import {filter, map} from 'rxjs/operators';

import {Plant} from "../models/Plant";
import {PLANTS} from "../../assets/mocks/mock-plants";
import {Schedule} from "../models/Schedule";
import {SCHEDULES} from "../../assets/mocks/mock-schedule";
import {HttpClient} from "@angular/common/http";
import {RECOMMENDATION} from "../../assets/mocks/mock-recplant";
import {PlantInfo} from "../models/PlantInfo";
import {STORYBOARD} from "../../assets/mocks/mock.storyboard";
import {Storyboard} from "../models/Storyboard";

@Injectable({
  providedIn: 'root'
})
export class GreenhouseManageService {

  constructor(private http: HttpClient) {
  }


  // data service REST call
  getAllPlants(): Observable<Plant[]> {
    return of(PLANTS);
  }

  getSchedule(id: number | string) {
    return of(SCHEDULES).pipe(
      map((schedule: Schedule[]) => schedule.filter(s => s.plantID === +id))
    );
  }

  getStoryboard(id: number | string) {
    return of(STORYBOARD).pipe(
      map((storyboards: Storyboard[]) => storyboards.find(s => s.plant.id === +id))
    );
  }

  getPlant(id: number | string) {
    return this.getAllPlants().pipe(
      // (+) before `id` turns the string into a number
      map((plants: Plant[]) => plants.find(p => p.id === +id))
    );
  }


  getRecommended(type: string) {
    return of(RECOMMENDATION).pipe(
      map((rec: PlantInfo[]) => rec.find(p => p.name == type))
    );
  }

  getScheduleActions() {
    return ["Watering", "Manure", "Harvest", "Pruning", "Treating"]
  }

  addScheduleAction(data: any, action: string, date: Date) {
    //todo:mod
    SCHEDULES.push({id: Math.random(), action: action, plantID: data.plantID, date: date})
  }


  //api get request to newsAPI to get all articles related to the plant type
  getRelatedArticles(plantType: string) {
    let url = 'http://newsapi.org/v2/everything?qInTitle=' + plantType + '&sortBy=publishedAt&apiKey=6c3cd712f87541beb1743c8ec1d727d0';
    return this.http.get(url);
  }
}
