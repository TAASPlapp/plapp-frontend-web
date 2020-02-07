import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {urls} from "../../assets/urls";

const AUTH_API = urls.serverUrl;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    let a =this.http.post(AUTH_API + 'login', {
      username: credentials.username,
      password: credentials.password,
    }, httpOptions);
    console.log(a);

    return a;
  }

  register(user): Observable<any> {
    return this.http.post(AUTH_API + 'api/auth/signup', {
      username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }
}
