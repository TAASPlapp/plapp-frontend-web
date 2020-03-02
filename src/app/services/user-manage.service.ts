import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {urls} from "../../assets/urls";
import {UserDetails} from "../models/UserDetails";
import {USERS} from "../../assets/mocks/mock-user";
import {map} from "rxjs/operators";
import {Storyboard} from "../models/Storyboard";
import {STORYBOARD} from "../../assets/mocks/mock.storyboard";
import {ApiResponse} from "../models/ApiResponse";

const API_URL = urls.apiServerUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiBaseUrl: string = urls.apiServerUrl + "social";


  constructor(private http: HttpClient) {
  }

  getInfo(): Observable<UserDetails> {
    //todo:modificare
    //return this.http.get(API_URL + 'all', {responseType: 'text'});
    return (of(USERS).pipe(
      map((users: UserDetails[]) => users.find(u => u.userId === 2434))
    ));
  }

  getUserInfo(id: number | string): Observable<UserDetails> {
    return of(USERS).pipe(
      map((users: UserDetails[]) => users.find(u => u.userId === +id))
    );
  }

  getStoryboard(id: number | string): Observable<Storyboard[]> {
    return of(STORYBOARD).pipe(
      map((storyboards: Storyboard[]) => storyboards.filter(s => s.plant.owner == +id))
    );
  }





}
