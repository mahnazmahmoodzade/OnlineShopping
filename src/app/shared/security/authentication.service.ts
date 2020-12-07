import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map, mergeMap} from "rxjs/operators";
import {SettingService} from "../services/setting.service";
import {LoginStorageService} from "../services/login-storage.service";


@Injectable()
export class AuthenticationService {

  constructor(private router: Router,
              private setting: SettingService,
              private loginStorage: LoginStorageService,
              private http: HttpClient) {
  }

  get isAuthenticated(): boolean {
    return !!this.loginStorage.accessToken();
  }

  login(loginData: { username: string, password: string }): Observable<any> {
    const formData = `grant_type=password&username=${loginData.username}&password=${loginData.password}`;
    return this.http.post(this.setting.authBasePath, formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).pipe(mergeMap((jwt: any) => {
      return this.http.get(this.setting.apiBasePath + 'account/current',
        {headers: {Authorization: 'Bearer ' + jwt.access_token}})
        .pipe(map((user) => {
          this.loginStorage.saveLogin(jwt,user);
          return user;
        }));
    }));

  }

}


