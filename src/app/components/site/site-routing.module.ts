import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GreenhouseComponent} from "./greenhouse/greenhouse.component";
import {AccountComponent} from "./account/account.component";
import {SettingsComponent} from "./settings/settings.component";
import {AboutComponent} from "./about/about.component";
import {DiscoverComponent} from "./discover/discover.component";
import {DashboardComponent} from "./dashboard/dashboard.component";


const routes: Routes = [
    {path: '',redirectTo: 'greenhouse', pathMatch: 'full'},
    {path: 'greenhouse', component: GreenhouseComponent},
    {path: 'greenhouse/dashboard', component: DashboardComponent},
    {path: 'discover', component: DiscoverComponent},
    {path: 'account', component: AccountComponent},
    {path: 'settings', component: SettingsComponent},
    {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
