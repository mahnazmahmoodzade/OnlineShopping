import {Component, OnInit} from '@angular/core';
import {ProductModel} from "../../shared/models/product.model";
import {ProductService} from "../../shared/api-services/product.service";
import {Observable} from "rxjs";
import {IsLoadingService} from "@service-work/is-loading";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: ProductModel[];
  isLoading: Observable<boolean>;
  displayedColumns: string[] = ['id','imageUrl','name','price','description'];

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
