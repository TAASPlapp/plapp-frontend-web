import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../../services/token-storage.service";
import {AuthService} from "../../../services/auth.service";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {Router} from "@angular/router";
import {first} from "rxjs/operators";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }

  }

  onSubmit() {
    this.authService.login(this.form).subscribe(
      (data: HttpResponse<any>) => {
        console.log(data.headers.get('username'));
        console.log(data.headers.get('authorization'));
        this.tokenStorage.saveToken(data.headers.get('authorization'));
        this.tokenStorage.saveUser({username: data.headers.get('username')});
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.router.navigate(['/site'])
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

}