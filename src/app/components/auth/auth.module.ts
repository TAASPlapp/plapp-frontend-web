import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import {FormsModule} from "@angular/forms";
import {MatSnackBarModule } from '@angular/material';
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
      LoginComponent,
      RegisterComponent,
      ForgotPasswordComponent,

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    MatButtonModule,
    MatSnackBarModule,
  ]
})
export class AuthModule { }
