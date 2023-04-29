import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private modalService: NgbModal) {}

  public open(modal: any): void {
    this.modalService.open(modal);
  }
  showProducts: boolean = false;
  @ViewChild(ProductsComponent) productsComponent: ProductsComponent;
  renderProducts() {
    this.showProducts = true;
  }
}
