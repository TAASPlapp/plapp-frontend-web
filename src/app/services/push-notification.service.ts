import {Injectable} from '@angular/core';
import {AngularFireMessaging} from '@angular/fire/messaging';
import {BehaviorSubject, Observable, Subscription} from 'rxjs'
import {HttpClient, HttpParams} from "@angular/common/http";
import {ApiResponse} from "../models/ApiResponse";
import {urls} from "../../assets/urls";
import {PlantInfo} from "../models/PlantInfo";


@Injectable()
export class PushNotificationService {

    currentMessage = new BehaviorSubject(null);
    messages: any[];
    baseUrlNotification = urls.apiServerUrl + "notifications/"

    constructor(
        private angularFireMessaging: AngularFireMessaging,
        private http: HttpClient,
    ) {
        /*this.angularFireMessaging.messaging.subscribe(
            (_messaging) => {
                _messaging.onMessage = _messaging.onMessage.bind(_messaging);
                _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
            }
        )*/
    }

    requestPermission() {
        this.angularFireMessaging.requestToken.subscribe(
            (token) => {
                console.log("token", token)
                this.sendToken(token).subscribe(res => console.log(res.message))

            },
            (err) => {
                console.error('Unable to get permission to notify.', err);
            }
        );
    }

    sendToken(token: string): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(this.baseUrlNotification + 'register', {
            params: new HttpParams().set("firebaseToken", token)
        });
    }

    receiveMessage() {
        return this.angularFireMessaging.messages.subscribe(
            (payload) => {
                console.log("new message received. ", payload);
                this.currentMessage.next(payload);
            })
    }
}
