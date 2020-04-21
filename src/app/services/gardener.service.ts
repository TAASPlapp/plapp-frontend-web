import {Injectable} from '@angular/core';
import {ApiResponse} from "../models/ApiResponse";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {PlantInfoResponse} from "../models/PlantInfoResponse";
import {urls} from "../../assets/urls";

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
    providedIn: 'root'
})
export class GardenerService {
    private plantInfoUrl: string = "https://plant-info-api.herokuapp.com/plants/";
    private apiBaseUrl: string = urls.apiServerUrl + 'gardener/';

    constructor(private http: HttpClient) {
    }

    getDiagnosis(url: string): Observable<ApiResponse> {
        //chiamata alla rete neurale todo mod
        return this.http.get<ApiResponse>(this.apiBaseUrl + "diagnose", {
            params: new HttpParams().set("plantImageURL", url)
        });
    }

    getDiseaseInfo(plant: string, disease: string): Observable<PlantInfoResponse> {
        return this.http.get<PlantInfoResponse>(this.plantInfoUrl + plant + disease);
    }
}
