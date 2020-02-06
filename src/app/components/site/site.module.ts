import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import {SideBarComponent} from "./side-bar/side-bar.component";
import {TopBarComponent} from "./top-bar/top-bar.component";
import {SettingsComponent} from "./settings/settings.component";
import {GreenhouseComponent} from "./greenhouse/greenhouse.component";
import {AccountComponent} from "./account/account.component";
import {AboutComponent} from "./about/about.component";
import {DiscoverComponent} from "./discover/discover.component";
import { AddPlantComponent } from './add-plant/add-plant.component';
import { ManagePlantComponent } from './manage-plant/manage-plant.component';


@NgModule({
  declarations: [
      SideBarComponent,
      AboutComponent,
      TopBarComponent,
      GreenhouseComponent,
      DiscoverComponent,
      AccountComponent,
      SettingsComponent,
      AddPlantComponent,
      ManagePlantComponent,
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
  ]
})
export class SiteModule { }
