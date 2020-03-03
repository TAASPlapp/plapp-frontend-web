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
import { AddScheduleComponent } from './manage-plant/add-schedule/add-schedule.component';
import {MatLineModule, MatNativeDateModule} from "@angular/material/core";
import {MatListModule} from "@angular/material/list";
import {MatBottomSheetModule} from "@angular/material/bottom-sheet";
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatRadioModule} from "@angular/material/radio";
import {MatStepperModule} from "@angular/material/stepper";
import { AddStoryboardItemComponent } from './manage-plant/add-storyboard-item/add-storyboard-item.component';
import { ModalGalleryComponent } from './modal-gallery/modal-gallery.component';
import {NgbCarouselModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {DateAgoPipe} from "../../pipes/date-ago.pipe";
import { CommentComponent } from './comment/comment.component';
import { CaruselStoryboardComponent } from './carusel-storyboard/carusel-storyboard.component';
import {DateWillPipe} from "../../pipes/date-will.pipe";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { StroyboardCommentsComponentComponent } from './stroyboard-comments-component/stroyboard-comments-component.component';
import {NgxSpinnerModule} from "ngx-spinner";
import { SpinnerComponent } from './spinner/spinner.component';


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
    AddStoryboardItemComponent,
    ModalGalleryComponent,
    DateAgoPipe,
    DateWillPipe,
    CommentComponent,
    CaruselStoryboardComponent,
    StroyboardCommentsComponentComponent,
    SpinnerComponent,

  ],
  entryComponents: [AddScheduleComponent, AddStoryboardItemComponent, ModalGalleryComponent],

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
    ReactiveFormsModule,
    MatStepperModule,
    NgbCarouselModule,
    NgbModule,
    MatCheckboxModule,
    NgxSpinnerModule,

  ],
  bootstrap: [ModalGalleryComponent, TopBarComponent],
  exports: [ModalGalleryComponent, DateAgoPipe, DateWillPipe, TopBarComponent],

  providers: [{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },]
})
export class SiteModule {
}
