import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component'
import { AboutComponent } from './components/about/about.component';
import { GreenhouseComponent } from './components/greenhouse/greenhouse.component';
import { DiscoverComponent } from './components/discover/discover.component';
import { AccountComponent } from './components/account/account.component';
import { SettingsComponent } from './components/settings/settings.component';


const routes: Routes = [
  {path: '', component: GreenhouseComponent},
  {path: 'greenhouse', component: GreenhouseComponent},
  {path: 'greenhouse/dashboard', component: DashboardComponent},
  {path: 'discover', component: DiscoverComponent},
  {path: 'account', component: AccountComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
