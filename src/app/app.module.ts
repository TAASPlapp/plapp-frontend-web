import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutComponent } from './components/about/about.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { GreenhouseComponent } from './components/greenhouse/greenhouse.component';
import { DiscoverComponent } from './components/discover/discover.component';
import { AccountComponent } from './components/account/account.component';
import { SettingsComponent } from './components/settings/settings.component';

@NgModule({
  //where components go including appComponent (auto update using cli)
  declarations: [
    AppComponent,
    SideBarComponent,
    DashboardComponent,
    AboutComponent,
    TopBarComponent,
    FooterComponent,
    GreenhouseComponent,
    DiscoverComponent,
    AccountComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
