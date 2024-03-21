import {AfterViewInit, Component, ViewChild } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements AfterViewInit {
  selectedProduct: Product | undefined;

  products: Product[] = [
    {name: 'Webcam',  price: 100},  {name: 'Microphone',  price: 200},  {name: 'Wireless keyboard',  price: 85}
  ];


  onBuy(){
    window.alert(`You just bought ${this.selectedProduct?.name}!`);
  }

  @ViewChild(ProductDetailComponent) productDetail: ProductDetailComponent | undefined;

  ngAfterViewInit(): void {
    if(this.productDetail){
      console.log(this.productDetail.product);
    }
  }
  trackByProducts(index: number, name: string): string{
    return name;
  }

}
