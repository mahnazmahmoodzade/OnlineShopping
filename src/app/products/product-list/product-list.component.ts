import {Component, OnInit} from '@angular/core';
import {ProductModel} from "../../shared/models/product.model";
import {ProductService} from "../../shared/api-services/product.service";
import {Observable} from "rxjs";
import {IsLoadingService} from "@service-work/is-loading";
import {ProductBaseComponent} from "../product-base/product-base.component";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent extends ProductBaseComponent implements OnInit {
  displayedColumns: string[] = ['id','imageUrl','name','price','description'];
}
