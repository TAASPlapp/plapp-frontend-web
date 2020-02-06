import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import {Plant} from "../models/Plant";

@Injectable({
  providedIn: 'root'
})
export class SpringConnectService {
  url:string = '';

  constructor(private http:HttpClient) {}

  connectToSpring():Observable<Plant[]>{
    return this.http.get<Plant[]>(this.url);
  }
}
