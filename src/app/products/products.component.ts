import { Component, OnInit } from '@angular/core';
import {ProductModel} from "../shared/models/product.model";
import {Observable} from "rxjs";
import {ProductService} from "../shared/api-services/product.service";
import {IsLoadingService} from "@service-work/is-loading";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
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
