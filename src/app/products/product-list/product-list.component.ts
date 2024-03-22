import {AfterViewInit, Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  
  providers: [ProductsService]
})
export class ProductListComponent implements AfterViewInit, OnInit, OnDestroy {
   
  selectedProduct: Product | undefined;

  private productsSub: Subscription | undefined;

  products$: Observable<Product[]> | undefined;
  private productService: ProductsService;

  constructor(){
    this.productService = new ProductsService();
  }
  ngOnDestroy(): void {
    this.productsSub?.unsubscribe();
  }
  ngOnInit(): void {
    this.getProducts();
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
  private getProducts(){
    this.products$ = this.productService.getProducts();
  }

}
