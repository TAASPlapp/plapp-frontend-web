import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {
  MatSnackBar,
} from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {};
  registerForm: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, public snackBar: MatSnackBar) { }

  ngOnInit() {}

  onSubmit() {
    let snackBarRef  = this.snackBar.open('Wait for registration...', 'Close');
    this.authService.register(this.registerForm).subscribe(
      data => {
        if(data.status == 200){
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          let snackBarRef  = this.snackBar.open('Account registered!', 'Close');
          console.log("Account registered!!")
        }
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
        let snackBarRef  = this.snackBar.open('Error Register! Try again later...', 'Close');
        console.log(err.error.message)

      }
    );
  }





}
