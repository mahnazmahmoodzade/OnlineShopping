import {Injectable} from "@angular/core";
import {SettingService} from "./setting.service";


export abstract class LoginStorageService {

  abstract saveLogin(jwt: any, user: any);

  abstract getUser(): any;

  abstract accessToken(): string;

  abstract clear();

}

@Injectable()
export class LoginSessionStorageService implements LoginStorageService {

  constructor() {
  }

  saveLogin(jwt: any, user: any) {
    sessionStorage.setItem('user', JSON.stringify(user));
    sessionStorage.setItem('jwt', JSON.stringify(jwt));
  }

  getUser(): any {
    return sessionStorage.getItem('user');
  }

  accessToken(): string {
    const hasJwt = sessionStorage.getItem('jwt');
    if (!hasJwt) {
      return null;
    }
    const jwt = JSON.parse(sessionStorage.getItem('jwt'));
    return jwt.access_token;
  }

  clear() {
    sessionStorage.removeItem('jwt');
    sessionStorage.removeItem('user');
  }
}

@Injectable()
export class LoginLocalStorageService implements LoginStorageService {
  constructor() {
  }

  saveLogin(jwt: any, user: any) {

    localStorage.setItem('jwt', jwt);
    localStorage.setItem('user', user);
  }

  getUser(): any {
    return localStorage.getItem('user');
  }

  accessToken(): string {
    const hasJwt = localStorage.getItem('jwt');
    if (!hasJwt) {
      return null;
    }
    const jwt = JSON.parse(localStorage.getItem('jwt'));
    return jwt.access_token;
  }

  clear() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('user');
  }

}
