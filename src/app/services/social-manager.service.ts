import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Plant} from "../models/Plant";
import {PLANTS} from "../../assets/mocks/mock-plants";
import {STORYBOARD} from "../../assets/mocks/mock.storyboard";
import {Storyboard} from "../models/Storyboard";

@Injectable({
  providedIn: 'root'
})
export class SocialManagerService {


  constructor(private http: HttpClient) { }

  // data service REST call
  getAllStoryboards(): Observable<Storyboard[]> {
    return of(STORYBOARD);
  }
}
