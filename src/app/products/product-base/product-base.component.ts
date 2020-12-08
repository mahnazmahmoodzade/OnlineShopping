import { Component, OnInit } from '@angular/core';
import {ProductModel} from "../../shared/models/product.model";
import {Observable} from "rxjs";
import {IsLoadingService} from "@service-work/is-loading";
import {ProductService} from "../../shared/api-services/product.service";

@Component({
  selector: 'app-product-base',
  templateUrl:'./product-base.component.html',
  styleUrls: ['./product-base.component.scss']
})
export class ProductBaseComponent implements OnInit {

  products: ProductModel[];
  isLoading: Observable<boolean>;

  constructor(private productService: ProductService,
              private isLoadingService: IsLoadingService) { }

  ngOnInit(): void {
    this.isLoading = this.isLoadingService.isLoading$();
    this.getProduct();
  }
  getProduct() {
    this.isLoadingService.add();
    this.productService.getAll().subscribe(products => {
      this.products = products;
    }, error => {
      this.isLoadingService.remove();
    }, () => {
      this.isLoadingService.remove();
    })
  }

}
