import { Component, OnInit } from '@angular/core';
import {
  IProduct,
  ICategory,
  DiscountOffer,
} from '../Shared Classes and types/sct';
import { ProductService } from '../Services/product.service';
//the @component decorator is used to define the metadata of the component
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  CurrentDiscount: DiscountOffer = DiscountOffer.TenPercent;
  DiscountOffer: any = DiscountOffer;
  StoreName: string = 'My Store';
  StoreLogo: string = 'assets/logo.png';
  ProductList: IProduct[] = [];
  CategoryList: ICategory[] = [
    { ID: 1, Name: 'Electronics' },
    { ID: 2, Name: 'Home and Kitchen' },
    { ID: 3, Name: 'clothes' },
  ];
  ClientName: string = 'SOROUR';
  IsPurshased: boolean = false;

  ToggleIsPurshased() {
    this.IsPurshased = !this.IsPurshased;
  }
  constructor(private productService: ProductService) {
    this.ProductList = this.productService.getALLProducts();
  }
}
