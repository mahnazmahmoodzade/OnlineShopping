import { Component, OnInit } from '@angular/core';
import {ProductModel} from "../../shared/models/product.model";
import {ProductService} from "../../shared/api-services/product.service";
import {IsLoadingService} from "@service-work/is-loading";
import {Observable} from "rxjs";
import {ProductBaseComponent} from "../product-base/product-base.component";

@Component({
  selector: 'app-product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.scss']
})
export class ProductThumbnailComponent extends ProductBaseComponent implements OnInit {
  trackById(product:ProductModel){
    return product.id;
  }
}
