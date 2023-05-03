import { Injectable } from '@angular/core';
import { IProduct } from '../Shared Classes and types/sct';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: IProduct[] = [
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
  constructor() {}
  getALLProducts(): IProduct[] {
    return this.products;
  }

  // b-GetProductById(prdId) that return the product with the specified id that passed as parameter.
  // With the following validatations
  // -If there is no product with the specified id return null;
  // -If the data that are passsed not number return null;
  GetProductById(prdId: number): IProduct | null {
    if (!isNaN(prdId)) {
      const product = this.products.find(p => p.ID === prdId);
      return product ? product : null;
    }
    return null;
  }
}
