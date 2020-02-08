import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import {filter, map} from 'rxjs/operators';

import {Plant} from "../models/Plant";
import {PLANTS} from "../../assets/mocks/mock-Plants";
import {Schedule} from "../models/Schedule";
import {SCHEDULES} from "../../assets/mocks/mock-schedule";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GreenhouseManageService {

  constructor(private http: HttpClient) { }

  createGreenhouse(username: string) : Observable<any>{
    //TODO: DA IMPLEMENTARE E VEDERE SE FUNZIONA IL BACKEND
    return null;
  }

  // data service REST call
  getPlants():Observable<Plant[]>{
    return of(PLANTS);
  }

  getSchedule(id:number| string){
    return of (SCHEDULES).pipe(
      map((schedule: Schedule[]) => schedule.find(s => s.plantID === +id))
    );

  }

  getStoryboard(id:number | string){

  }

  getPlant(id: number | string) {
    return this.getPlants().pipe(
      // (+) before `id` turns the string into a number
      map((plants: Plant[]) => plants.find(p => p.id === +id))
    );
  }


}
