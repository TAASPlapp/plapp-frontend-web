import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {urls} from "../../assets/urls";

const API_URL = urls.apiServerUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserInfo(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }
}
