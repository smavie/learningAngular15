import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ProductViewService } from './product-view.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css',
  providers: [ProductViewService]
})
export class ProductViewComponent implements OnInit, OnDestroy{
  @Input() id = -1;
  name = '';

  private productSub = new Subject<void>;

  constructor(private productViewService: ProductViewService){}
  ngOnDestroy(): void {
    this.productSub.next();
    this.productSub.complete();
  }

  ngOnInit(): void {
  this.getProduct();
  }

  private getProduct(){
    this.productViewService.getProduct(this.id).pipe(
      takeUntil(this.productSub)).subscribe(product =>{
      if(product){
        this.name = product.name;
      }
    })
  }

}
