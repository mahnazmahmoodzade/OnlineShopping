import {Observable, of} from "rxjs";
import {ProductModel} from "../models/product.model";
import {ApiService} from "./api.service";
import {Injectable} from "@angular/core";
import {catchError, map} from "rxjs/operators";

@Injectable()
export class ProductService {
  basePath = 'products';
  cache: ProductModel[];

  constructor(private apiService: ApiService) {
  }

  getAll(): Observable<ProductModel[]> {
    if(this.cache){
      return of(this.cache);
    }
    return this.apiService.get(this.basePath).pipe(map((res: any) => {
        this.cache=res;
        return res;
      }));
  }


  getById(productId: number) {
    return {id: productId, name: `Product ${productId}`, price: 1000, imageUrl: 'https://picsum.photos/id/188/200/200'};
  }
}
