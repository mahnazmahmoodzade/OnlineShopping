import {Observable} from "rxjs";
import {ProductModel} from "../models/product.model";
import {ApiService} from "./api.service";
import {Injectable} from "@angular/core";

@Injectable()
export class ProductService {
  basePath = 'products';

  constructor(private apiService: ApiService) {
  }

  getAll(): Observable<ProductModel[]> {
    return this.apiService.get(this.basePath);
  }


  getById(productId: number) {
    return {id: productId, name: `Product ${productId}`, price: 1000, imageUrl: 'https://picsum.photos/id/188/200/200'};
  }
}
