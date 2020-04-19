import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {TokenStorageService} from "./services/token-storage.service";

@Injectable({
  providedIn: 'root'
})
export class ServicesGuard implements CanActivate {
  constructor(public token: TokenStorageService, public router: Router) {
  }

  canActivate(): boolean {
    if (!this.token.isAuthenticated()) {
      this.router.navigate(['auth']);
      return false;
    }

    return true;
  }
  
}
