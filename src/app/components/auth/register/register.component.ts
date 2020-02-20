import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, public snackBar: MatSnackBar, private router: Router) { }

  ngOnInit() {}

  onSubmit() {
    console.log("pressed");
    this.authService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        console.log("Account registered!!")
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
        let snackBarRef  = this.snackBar.open('Error login!', 'Close');
        console.log("Error!!")

      }
    );
  }





}
