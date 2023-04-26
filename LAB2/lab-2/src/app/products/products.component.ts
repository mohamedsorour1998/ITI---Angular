import { Component, OnInit } from '@angular/core';
import {
  IProduct,
  ICategory,
  DiscountOffer,
} from '../Shared Classes and types/sct';

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
  ProductList: IProduct[] = [
    {
      ID: 1,
      Name: 'iPhone 11',
      Quantity: 10,
      Price: 500,
      Img: 'assets/product-1.jpeg',
    },
    {
      ID: 2,
      Name: 'iPhone 12',
      Quantity: 20,
      Price: 600,
      Img: 'assets/product-2.jpeg',
    },
    {
      ID: 3,
      Name: 'iPhone 13',
      Quantity: 30,
      Price: 700,
      Img: 'assets/product-3.jpeg',
    },
  ];
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
  constructor() {}
}
