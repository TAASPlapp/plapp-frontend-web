import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SiteRoutingModule} from './site-routing.module';
import {SideBarComponent} from "./side-bar/side-bar.component";
import {TopBarComponent} from "./top-bar/top-bar.component";
import {SettingsComponent} from "./settings/settings.component";
import {GreenhouseComponent} from "./greenhouse/greenhouse.component";
import {AccountComponent} from "./account/account.component";
import {AboutComponent} from "./about/about.component";
import {DiscoverComponent} from "./discover/discover.component";
import {AddPlantComponent} from './add-plant/add-plant.component';
import {ManagePlantComponent} from './manage-plant/manage-plant.component';
import {NgImageSliderModule} from "ng-image-slider";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import { AddScheduleComponent } from './add-schedule/add-schedule.component';
import {MatLineModule, MatNativeDateModule} from "@angular/material/core";
import {MatListModule} from "@angular/material/list";
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatRadioModule} from "@angular/material/radio";


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
    AddScheduleComponent,

  ],
  entryComponents: [AddScheduleComponent],

  imports: [
    CommonModule,
    SiteRoutingModule,
    NgImageSliderModule,
    MatDividerModule,
    MatButtonModule,
    MatLineModule,
    MatListModule,
    MatBottomSheetModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    FormsModule,
    MatRadioModule,
    ReactiveFormsModule

  ],
  providers: [{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },]
})
export class SiteModule {
}
