import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FooterComponent} from './components/footer/footer.component';
import {Error404Component} from './components/errorPage/error404.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgImageSliderModule} from "ng-image-slider";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {environment} from "../environments/environment";
import {AngularFireModule} from "@angular/fire";
import {AngularFireMessagingModule} from "@angular/fire/messaging";
import {AngularFireAuthModule} from "@angular/fire/auth";
import {AsyncPipe} from "@angular/common";
import {PushNotificationService} from "./services/push-notification.service";
import {authInterceptorProviders} from "./auth-interceptor";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgImageSliderModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [PushNotificationService,AsyncPipe, authInterceptorProviders],
  exports: [],

  bootstrap: [AppComponent]
})
export class AppModule {
}
