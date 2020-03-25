import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable, of} from "rxjs";

import {STORYBOARD} from "../../assets/mocks/mock.storyboard";
import {Storyboard} from "../models/Storyboard";
import {COMMENTS} from "../../assets/mocks/mock-comments";
import {urls} from "../../assets/urls";
import {ApiResponse} from "../models/ApiResponse";
import {MediaContentType} from "../models/MediaContentType";
import {LIKES} from "../../assets/mocks/mock-like";

@Injectable({
  providedIn: 'root'
})
export class SocialManagerService {
  private baseUrl: string = urls.apiServerUrl + 'social/';


  constructor(private http: HttpClient) {
  }

  // data service REST call
  getAllStoryboards(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(urls.apiServerUrl + 'greenhouse/storyboards/feed');
  }


  getComments(id: number, media: MediaContentType): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + 'comments', {
      params: new HttpParams().set("contentType", media.toString()).set("itemId", id.toString())
    })

  }

  getLikes(id: number, media: MediaContentType): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + 'likes', {
      params: new HttpParams().set("contentType", media.toString()).set("itemId", id.toString())
    })
  }

}
