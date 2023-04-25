import { Component } from '@angular/core';
interface IProduct {
  ID: number;
  Name: string;
  Quantity: number;
  Price: number;
  Img: string;
}

interface ICategory {
  ID: number;
  Name: string;
}
//enum is a special type that allows us to define a set of named constants
enum DiscountOffer {
  NoDiscount = 'No Discount',
  TenPercent = '10%',
  FifteenPercent = '15%',
}
//the @component decorator is used to define the metadata of the component
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
Discount: DiscountOffer = DiscountOffer.TenPercent;
StoreName: string = 'My Store';
StoreLogo: string = 'assets/images/logo.png';
ProductList: IProduct[] = [
  {ID: 1, Name: 'Product 1', Quantity: 10, Price: 100, Img: 'assets/images/product-1.jpg'},
  {ID: 2, Name: 'Product 2', Quantity: 20, Price: 200, Img: 'assets/images/product-2.jpg'},
  {ID: 3, Name: 'Product 3', Quantity: 30, Price: 300, Img: 'assets/images/product-3.jpg'},
];
CategoryList: ICategory[] = [
  {ID: 1, Name: 'Category 1'},
  {ID: 2, Name: 'Category 2'},
  {ID: 3, Name: 'Category 3'},
];
ClientName: string = 'SOROUR';
IsPurchase: boolean = false;
constructor() { }
}
