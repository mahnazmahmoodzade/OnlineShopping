import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {AboutComponent} from "./about/about.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {ProductThumbnailComponent} from "./products/product-thumbnail/product-thumbnail.component";
import {ProductListComponent} from "./products/product-list/product-list.component";
import {AuthGuard} from "./shared/guards/auth.guard";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {path: '', redirectTo: 'list', pathMatch: 'full'},
      {path: 'thumbnail', component: ProductThumbnailComponent},
      {path: 'list', component: ProductListComponent},
    ]
  },
  {path: 'about', component: AboutComponent},
  {path: 'login', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
