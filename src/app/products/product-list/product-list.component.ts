import {AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements AfterViewInit, OnInit {
   
  selectedProduct: Product | undefined;

  products: Product[] = [];
  private productService: ProductsService;

  constructor(){
    this.productService = new ProductsService();
  }
  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

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
