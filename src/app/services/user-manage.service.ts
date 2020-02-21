import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {urls} from "../../assets/urls";
import {UserInfo} from "../models/UserInfo";
import {USERS} from "../../assets/mocks/mock-user";
import {map} from "rxjs/operators";
import {Storyboard} from "../models/Storyboard";
import {STORYBOARD} from "../../assets/mocks/mock.storyboard";

const API_URL = urls.apiServerUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiBaseUrl: string = urls.apiServerUrl + "social";


  constructor(private http: HttpClient) {
  }

  getInfo(): Observable<UserInfo> {
    //todo:modificare
    //return this.http.get(API_URL + 'all', {responseType: 'text'});
    return (of(USERS).pipe(
      map((users: UserInfo[]) => users.find(u => u.userId === 2434))
    ));
  }

  getUserInfo(id: number | string): Observable<UserInfo> {
    return of(USERS).pipe(
      map((users: UserInfo[]) => users.find(u => u.userId === +id))
    );
  }

  getStoryboard(id: number | string): Observable<Storyboard[]> {
    return of(STORYBOARD).pipe(
      map((storyboards: Storyboard[]) => storyboards.filter(s => s.plant.owner == +id))
    );
  }
}
