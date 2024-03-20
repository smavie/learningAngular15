import { Component, Input, Output, EventEmitter, ViewEncapsulation, ChangeDetectionStrategy,
OnInit 
} from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnInit {
  @Input() name = "";
  @Output() bought = new EventEmitter<string>();

  buy(){
    this.bought.emit(this.name);
  }

  get productName(): string{
    console.log(`Get ${this.name}`);
    return this.name;
  }
  constructor(){
    console.log(`Name is ${this.name} in constructor`);
  }
  ngOnInit(): void {
      console.log(`Name is ${this.name} in the ngOnInit`);
  }

}
