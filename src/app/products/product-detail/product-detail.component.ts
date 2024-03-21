import { Component, Input, Output, EventEmitter, ViewEncapsulation, ChangeDetectionStrategy,
OnInit, OnChanges, SimpleChanges, AfterViewInit 
} from '@angular/core';

import {Product} from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnInit, OnChanges {
  @Input() product: Product | undefined;
  @Output() bought = new EventEmitter<string>();

  buy(){
    this.bought.emit(this.product?.name);
  }

  get productName(): string{
    console.log(`Get ${this.product?.name}`);
    return this.product?this.product.name:"";
  }
  constructor(){
    console.log(`Name is ${this.product?.name} in constructor`);
  }

  ngOnInit(): void {
      console.log(`Name is ${this.product?.name} in the ngOnInit`);
  }
  ngOnChanges(changes: SimpleChanges): void {
      const product = changes['product'];
      if(!product.isFirstChange()){
        const oldValue = product.previousValue.name;
        const newValue = product.currentValue.name;
        console.log(`Product changed from ${oldValue} to ${newValue}`);
      }

  }

}
