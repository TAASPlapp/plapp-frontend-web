import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {urls} from "../../assets/urls";
import {UserDetails} from "../models/UserDetails";
import {USERS} from "../../assets/mocks/mock-user";
import {map} from "rxjs/operators";
import {Storyboard} from "../models/Storyboard";
import {STORYBOARD} from "../../assets/mocks/mock.storyboard";
import {ApiResponse} from "../models/ApiResponse";
import {Plant} from "../models/Plant";
import {Status} from "../models/Status";

const API_URL = urls.apiServerUrl;
const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private apiBaseUrl: string = urls.apiServerUrl + "social/";


    constructor(private http: HttpClient) {
    }

    getInfo(): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(this.apiBaseUrl + 'user');
    }

    getUserInfo(id: number | string): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(this.apiBaseUrl + 'user', {
            params: new HttpParams().set("userId", id.toString())
        });
    }

    updateUser(user: UserDetails): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(this.apiBaseUrl + "user/edit", JSON.stringify(user), httpOptions);
    }

    //TODO
    getStoryboards(userId: number | string): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(urls.apiServerUrl+"greenhouse/storyboards/" + userId);
    }

}
