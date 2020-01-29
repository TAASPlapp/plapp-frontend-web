import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Example } from '../models/Example';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpringConnectService {
  url:string = 'http://localhost:8080/api/customers';

  constructor(private http:HttpClient) {}

  connectToSpring():Observable<Example[]>{
    return this.http.get<Example[]>(this.url);
  }
}
