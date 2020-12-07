import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../shared/security/authentication.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {IsLoadingService} from "@service-work/is-loading";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isLoading: Observable<boolean>;

  constructor(private authService: AuthenticationService,
              private router: Router,
              private isLoadingService: IsLoadingService,
              private builder: FormBuilder) {
    this.loginForm = builder.group({
      username: builder.control('', [Validators.required]),
      password: builder.control('', [Validators.required,
        Validators.minLength(3)])
    });
  }

  ngOnInit(): void {
    this.isLoading = this.isLoadingService.isLoading$();
  }

  login() {
    this.isLoadingService.add();
    this.authService.login(this.loginForm.value).subscribe(res => {
        this.router.navigate(['products']);
      }, error => {
        this.isLoadingService.remove();
        console.error(error.message)
      },
      () => {
        this.isLoadingService.remove();
      });
  }
}
