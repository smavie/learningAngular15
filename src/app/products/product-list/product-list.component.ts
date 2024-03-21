import {AfterViewInit, Component, ViewChild } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements AfterViewInit {
  selectedProduct = "";
  onBuy(name: string){
    window.alert(`You just bought ${name}!`);
  }

  @ViewChild(ProductDetailComponent) productDetail: ProductDetailComponent | undefined;

  ngAfterViewInit(): void {
    if(this.productDetail){
      console.log(this.productDetail.name);
    }
  }

}
