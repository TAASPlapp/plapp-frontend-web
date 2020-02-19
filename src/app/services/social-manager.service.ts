import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";

import {STORYBOARD} from "../../assets/mocks/mock.storyboard";
import {Storyboard} from "../models/Storyboard";
import {COMMENTS} from "../../assets/mocks/mock-comments";

@Injectable({
  providedIn: 'root'
})
export class SocialManagerService {


  constructor(private http: HttpClient) { }

  // data service REST call
  getAllStoryboards(): Observable<Storyboard[]> {
    return of(STORYBOARD);
  }

  getComments(id:number){
    return of(COMMENTS)
  }
}
