import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';

import {Plant} from "../models/Plant";
import {Schedule} from "../models/Schedule";
import {HttpClient, HttpParams} from "@angular/common/http";
import {PlantInfo} from "../models/PlantInfo";
import {Storyboard} from "../models/Storyboard";
import {urls} from "../../assets/urls";
import {ApiResponse} from "../models/ApiResponse";

@Injectable({
  providedIn: 'root'
})
export class GreenhouseManageService {
  private apiBaseUrl: string = urls.apiServerUrl + 'greenhouse/';
  private plantsInfoApiUrl: string = urls.plantsInfoApiUrl;
  private apiScheduleUrl: string = urls.apiServerUrl + "schedule/";

  constructor(private http: HttpClient) {
  }

  //TODO:mod
  getAllPlants(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiBaseUrl + 'plants');
  }

  getStoryboard(id: number | string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiBaseUrl + 'storyboard', {
      params: new HttpParams().set("plantId", id.toString())
    });
  }

  getPlant(id: number | string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiBaseUrl + 'plant/', {
      params: new HttpParams().set("plantId", id.toString())
    });
  }


  getRecommended(type: string) {
    return this.http.get<PlantInfo>(this.plantsInfoApiUrl + 'plants/' + this.capitalizeFirstLetter(type));
  }

  //TODO:mod
  getPlantTypes() {
    return this.http.get<string[]>(this.plantsInfoApiUrl + 'get_types/')
  }

  capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  //TODO:mod
  getSchedules(id: number | string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.apiScheduleUrl, {
      params: new HttpParams().set("plantId", id.toString())
    });
  }

  getScheduleActions() {
    return ["Watering", "Manure", "Harvest", "Pruning", "Treating"]
  }

  addScheduleAction(schedule: Schedule) {
    console.log(schedule);
    return this.http.post(this.apiScheduleUrl + "add", {
      params: new HttpParams().set("action", JSON.stringify(schedule))
    });

  }

  removeSchedule(schedule: Schedule) {
    return this.http.get(this.apiScheduleUrl + "remove", {
      params: new HttpParams().set("action", JSON.stringify(schedule))
    });
  }


  //api get request to newsAPI to get all articles related to the plant type
  getRelatedArticles(plantType: string) {
    let url = 'http://newsapi.org/v2/everything?qInTitle=' + plantType + '&sortBy=publishedAt&apiKey=6c3cd712f87541beb1743c8ec1d727d0';
    return this.http.get(url);
  }
  //TODO:
  addPlant(plant: Plant){}


}


