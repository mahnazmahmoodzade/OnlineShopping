import { Component, OnInit } from '@angular/core';
import {ProductModel} from "../../shared/models/product.model";
import {ProductService} from "../../shared/api-services/product.service";
import {IsLoadingService} from "@service-work/is-loading";
import {Observable} from "rxjs";

@Component({
  selector: 'app-product-thumbnail',
  templateUrl: './product-thumbnail.component.html',
  styleUrls: ['./product-thumbnail.component.scss']
})
export class ProductThumbnailComponent implements OnInit {
  products: ProductModel[];
  isLoading: Observable<boolean>;

  constructor(private productService: ProductService,
              private isLoadingService: IsLoadingService,) {
  }

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
  trackById(product:ProductModel){
    return product.id;
  }
}
