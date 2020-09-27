import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent implements OnInit {

  @Input() product;

  @Output() remove: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  removeProduct(id){
    this.remove.emit(id);
  }

}
