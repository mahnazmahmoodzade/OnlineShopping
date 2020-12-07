import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {AboutComponent} from './about/about.component';
import {ProductsComponent} from './products/products.component';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {ShoppingCartBadgeComponent} from './navbar/shopping-cart-badge/shopping-cart-badge.component';
import {ProductToolbarComponent} from './products/product-toolbar/product-toolbar.component';
import {ProductThumbnailComponent} from './products/product-thumbnail/product-thumbnail.component';
import {ProductListComponent} from './products/product-list/product-list.component';
import {HttpClientModule} from "@angular/common/http";
import {ApiService} from "./shared/api-services/api.service";
import {AuthenticationService} from "./shared/security/authentication.service";
import {SettingService} from "./shared/services/setting.service";
import {LoginSessionStorageService, LoginStorageService} from "./shared/services/login-storage.service";
import {ProductService} from "./shared/api-services/product.service";
import {MaterialModule} from "./material.module";
import {AuthGuard} from "./shared/guards/auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutComponent,
    ProductsComponent,
    NavbarComponent,
    HomeComponent,
    ShoppingCartBadgeComponent,
    ProductToolbarComponent,
    ProductThumbnailComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    ApiService,
    AuthenticationService,
    SettingService,
    ProductService,
    AuthGuard,
    {provide: LoginStorageService, useClass: LoginSessionStorageService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
