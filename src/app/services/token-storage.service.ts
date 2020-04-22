import {Injectable} from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() {
  }

  signOut() {
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public getUser() {
    console.log("KEY: " + USER_KEY);
    console.log("SESSION: " + sessionStorage.getItem(TOKEN_KEY));
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  }

  public saveUser(userId: number) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, String(userId));
  }

  public isAuthenticated(): boolean {
    const token = sessionStorage.getItem(TOKEN_KEY);
    // Check whether the token is expired and return
    // true or false
    return (token != null);
  }
}
