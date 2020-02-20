import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FooterComponent} from './components/footer/footer.component';
import {Error404Component} from './components/errorPage/error404.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgImageSliderModule} from "ng-image-slider";

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
  ],
  providers: [],
  exports: [],

  bootstrap: [AppComponent]
})
export class AppModule {
}
