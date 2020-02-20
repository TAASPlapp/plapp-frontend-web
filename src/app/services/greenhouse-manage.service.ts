import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';
import {filter, map} from 'rxjs/operators';

import {Plant} from "../models/Plant";
import {Schedule} from "../models/Schedule";
import {SCHEDULES} from "../../assets/mocks/mock-schedule";
import {HttpClient, HttpParams} from "@angular/common/http";
import {RECOMMENDATION} from "../../assets/mocks/mock-recplant";
import {PlantInfo} from "../models/PlantInfo";
import {STORYBOARD} from "../../assets/mocks/mock.storyboard";
import {Storyboard} from "../models/Storyboard";
import {urls} from "../../assets/urls";

@Injectable({
  providedIn: 'root'
})
export class GreenhouseManageService {
  private baseUrl: string = urls.apiServerUrl + 'greenhouse/';

  constructor(private http: HttpClient) {
  }

  //TODO: capire se serve sapere l'id dell'utente chiamante
  getAllPlants(): Observable<Plant[]> {
    return this.http.get<Plant[]>(this.baseUrl + 'plants/');
  }

  getSchedules(id: number | string) {
    return this.http.get<Schedule[]>(this.baseUrl + 'schedules/', {
      params: new HttpParams().set("plantId", id.toString())
    });
  }

  getStoryboard(id: number | string) {
    return this.http.get<Storyboard>(this.baseUrl + 'storyboard/', {
      params: new HttpParams().set("plantId", id.toString())
    });
  }

  getPlant(id: number | string) {
    return this.http.get<Plant>(this.baseUrl + 'plant/', {
      params: new HttpParams().set("plantId", id.toString())
    });
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
