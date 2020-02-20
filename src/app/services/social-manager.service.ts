import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, of} from "rxjs";

import {STORYBOARD} from "../../assets/mocks/mock.storyboard";
import {Storyboard} from "../models/Storyboard";
import {COMMENTS} from "../../assets/mocks/mock-comments";
import {urls} from "../../assets/urls";

@Injectable({
  providedIn: 'root'
})
export class SocialManagerService {
  private baseUrl: string = urls.apiServerUrl + 'social/';


  constructor(private http: HttpClient) {
  }

  // data service REST call
  getAllStoryboards(): Observable<Storyboard[]> {
    return this.http.get<Storyboard[]>(this.baseUrl + 'storyboards/');
  }

  getComments(id: number) {
    return of(COMMENTS)
  }
}
