import { Injectable } from '@angular/core';
import {ApiResponse} from "../models/ApiResponse";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class GardenerService {

  constructor(private http: HttpClient) { }



  getDiagnosis(): Observable<ApiResponse>{
      return null;
  }
}
