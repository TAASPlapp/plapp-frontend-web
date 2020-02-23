import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';

import {Plant} from "../models/Plant";
import {Schedule} from "../models/Schedule";
import {SCHEDULES} from "../../assets/mocks/mock-schedule";
import {HttpClient, HttpParams} from "@angular/common/http";
import {PlantInfo} from "../models/PlantInfo";
import {Storyboard} from "../models/Storyboard";
import {urls} from "../../assets/urls";

@Injectable({
  providedIn: 'root'
})
export class GreenhouseManageService {
  private apiBaseUrl: string = urls.apiServerUrl + 'greenhouse/';
  private plantsInfoApiUrl: string = urls.plantsInfoApiUrl;
  private apiScheduleUrl: string = urls.apiServerUrl + "schedule/";

  constructor(private http: HttpClient) {
  }

  //TODO: capire se serve sapere l'id dell'utente chiamante
  getAllPlants(): Observable<Plant[]> {
    return this.http.get<Plant[]>(this.apiBaseUrl + 'plants');
  }

  getStoryboard(id: number | string) {
    return this.http.get<Storyboard>(this.apiBaseUrl + 'storyboard', {
      params: new HttpParams().set("plantId", id.toString())
    });
  }

  getPlant(id: number | string) {
    return this.http.get<Plant>(this.apiBaseUrl + 'plant/', {
      params: new HttpParams().set("plantId", id.toString())
    });
  }


  getRecommended(type: string) {
    return this.http.get<PlantInfo>(this.plantsInfoApiUrl + 'plants/' + this.capitalizeFirstLetter(type));
  }

  getPlantTypes() {
    return this.http.get<string[]>(this.plantsInfoApiUrl + 'get_types/')
  }

  capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  getSchedules(id: number | string) {
    return this.http.get<Schedule[]>(this.apiScheduleUrl, {
      params: new HttpParams().set("plantId", id.toString())
    });
  }

  getScheduleActions() {
    return ["Watering", "Manure", "Harvest", "Pruning", "Treating"]
  }

  addScheduleAction(data: any, action: string, date: Date) {
    //todo:mod
    // SCHEDULES.push({userId: Math.random(), action: action, plantId: data.plantID, date: date})
  }


  //api get request to newsAPI to get all articles related to the plant type
  getRelatedArticles(plantType: string) {
    let url = 'http://newsapi.org/v2/everything?qInTitle=' + plantType + '&sortBy=publishedAt&apiKey=6c3cd712f87541beb1743c8ec1d727d0';
    return this.http.get(url);
  }


}


