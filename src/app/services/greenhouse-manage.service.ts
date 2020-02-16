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
      map((schedule: Schedule[]) => schedule.find(s => s.plantID === +id))
    );

  }

  getStoryboard(id: number | string) {
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


}
