import {Observable} from "rxjs";
import {retry} from "rxjs/operators";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthenticationService} from "../security/authentication.service";
import {SettingService} from "../services/setting.service";
import {LoginStorageService} from "../services/login-storage.service";
import {Injectable} from "@angular/core";

@Injectable()
export class ApiService {
  apiBasePath: string;

  constructor(
    private http: HttpClient,
    private authService: AuthenticationService,
    private loginStorageService:LoginStorageService,
    private setting: SettingService) {
    this.apiBasePath = setting.apiBasePath;
  }

  get defaultOptions() {
    return {
      headers: {
        Authorization: 'Bearer ' + this.loginStorageService.accessToken()
      }
    };
  }

  get(url: string): Observable<any> {
    return this.http.get(this.apiBasePath + url, this.defaultOptions)
      .pipe(retry(3));
  }

  post(url: string, data: any): Observable<any> {
    return this.http.post(this.apiBasePath + url, data, this.defaultOptions);
  }

  put(url: string, data: any): Observable<any> {
    return this.http.put(this.apiBasePath + url, data, this.defaultOptions);
  }

  delete(url: string): Observable<any> {
    return this.http.delete(this.apiBasePath + url, this.defaultOptions);
  }

  request(url: any): Observable<any> {
    return this.http.request(url);
  }

  getBlob(url: string): Observable<any> {
    const options: any = {
      responseType: "text" as "tex"
    };
    Object.assign(options, this.defaultOptions);
    return this.http.get(this.apiBasePath + url, options);
  }
}
