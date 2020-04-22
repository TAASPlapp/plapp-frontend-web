import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from "../../../services/token-storage.service";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {HttpResponse} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {UserService} from "../../../services/user-manage.service";

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

  constructor(private authService: AuthService,
              private userService: UserService,
              private tokenStorage: TokenStorageService,
              private router: Router,
              public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }

  onSubmit() {
    let snackBarRef = this.snackBar.open('Logging in...', 'Close');
    this.authService.login(this.form).subscribe(
      (data: HttpResponse<any>) => {
        this.tokenStorage.saveToken(data.body.content);
        this.userService.getInfo().subscribe(res =>{
          this.tokenStorage.saveUser(res.content.userId)
        });
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        snackBarRef.dismiss();
        this.router.navigate(['/site'])
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        let snackBarRef = this.snackBar.open('ERROR: ' + this.errorMessage, 'Close');

      }
    );
  }

}
