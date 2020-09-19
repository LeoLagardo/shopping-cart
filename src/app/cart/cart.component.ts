import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import {ShareService} from '../shared/share.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products: Product[] = [];

  constructor(private shareService: ShareService) {
    // console.log(this.products)
  }

  ngOnInit(): void {
    this.shareService.newProduct.subscribe( product => {
        this.products.push(product);
        // console.log(this.products.length);
      });
  }

  removeProduct(id){
    this.products = this.products.filter(prod => {
      return prod.id !== id;
    });
  }
}
