import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent implements OnInit, OnDestroy {
  products$: Observable<Product[]> | undefined;
  private productsSub: Subscription | undefined;

  constructor(private productService: ProductsService){ }
  ngOnDestroy(): void {
    this.productsSub?.unsubscribe();
  }
  
  ngOnInit(): void {
    this.getProducts();
    }
    private getProducts(){
      this.products$ = this.productService.getProducts();
    }

}
