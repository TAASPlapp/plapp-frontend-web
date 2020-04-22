import {Injectable} from '@angular/core';

import {forkJoin, Observable} from 'rxjs';

import {Plant} from "../models/Plant";
import {Schedule} from "../models/Schedule";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {PlantInfo} from "../models/PlantInfo";
import {Storyboard} from "../models/Storyboard";
import {urls} from "../../assets/urls";
import {ApiResponse} from "../models/ApiResponse";
import {UserDetails} from "../models/UserDetails";
import {Status} from "../models/Status";
import {StoryboardItem} from "../models/StoryboardItem";

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
})
export class GreenhouseManageService {
    private apiBaseUrl: string = urls.apiServerUrl + 'greenhouse/';
    private plantsInfoApiUrl: string = urls.plantsInfoApiUrl;
    private apiScheduleUrl: string = urls.apiServerUrl + "schedule/";
    private storyboardItemUrl: string = urls.apiServerUrl + "greenhouse/storyboard/";


    constructor(private http: HttpClient) {
    }

    //TODO:mod
    getAllPlants(): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(this.apiBaseUrl + 'plants');
    }

    getStoryboard(id: number | string): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(this.apiBaseUrl + 'plant/' + id + '/storyboard');
    }

    addStoryboardItem(item: StoryboardItem, storyboardId: number | string): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(this.storyboardItemUrl + storyboardId + "/item/add", JSON.stringify(item), httpOptions);
    }

    getPlant(id: number | string): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(this.apiBaseUrl + 'plant/' + id);
    }

    getRecommended(type: string): Observable<PlantInfo> {
        return this.http.get<PlantInfo>(this.plantsInfoApiUrl + 'plants/' + this.capitalizeFirstLetter(type));
    }

    getPlantTypes() {
        return this.http.get<string[]>(this.plantsInfoApiUrl + 'get_types/')
    }

    capitalizeFirstLetter(str: string) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    getSchedules(id: number | string): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(this.apiScheduleUrl, {
            params: new HttpParams().set("plantId", id.toString())
        });
    }

    getScheduleActions() {
        return ["Watering", "Manure", "Harvest", "Pruning", "Treating"]
    }

    addScheduleAction(schedule: Schedule): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(this.apiScheduleUrl + "add", JSON.stringify(schedule), httpOptions);
    }

    removeSchedule(schedule: Schedule): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(this.apiScheduleUrl + "remove", JSON.stringify(schedule), httpOptions);
    }


    //api get request to newsAPI to get all articles related to the plant type
    getRelatedArticles(plantType: string) {
        let url = 'http://newsapi.org/v2/everything?qInTitle=' + plantType + '&sortBy=publishedAt&apiKey=6c3cd712f87541beb1743c8ec1d727d0';
        return this.http.get(url);
    }

    addPlant(url: string, form, user: UserDetails): Observable<ApiResponse> {
        let plant: Plant = new Plant(-1, user.userId, form.name, form.description, form.type, Status.HEALTHY, url);
        return this.http.post<ApiResponse>(this.apiBaseUrl + "plants/add", JSON.stringify(plant), httpOptions);
    }


    requestDataFromMultipleSources(id: string, type: string): Observable<any[]> {
        let plant = this.getPlant(id);
        let stroyboard = this.getStoryboard(id);
        let schedules = this.getSchedules(id);
        let reccomended = this.getRecommended(type);
        let related = this.getRelatedArticles(type);

        return forkJoin([plant, stroyboard, schedules, reccomended, related]);
    }


}


