import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import {ShareService} from '../shared/share.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products = [];
  myProduct = new Set(this.products);
  cartQty = 0;

  constructor(private shareService: ShareService) {

  }

  ngOnInit(): void {
    this.shareService.newProduct.subscribe( product => {

        if (this.myProduct.has(product)){
          const index = this.products.findIndex(ele => {
            return ele.id === product.id;
          });
          this.products[index].quantity++;
        }

        else{
          this.products.push({
            id: product.id,
            name : product.name,
            imageURL: product.imageURL,
            quantity: 1
          });
        }

        this.myProduct.add(product);
        this.cartQuantity();
    });
}

cartQuantity(){
  this.cartQty = 0;
  this.products.forEach(prod => {
    this.cartQty += prod.quantity;
  });
}



  removeProduct(id){
    this.products = this.products.filter(prod => {
      return prod.id !== id;
    });
    this.cartQuantity();
    const obj = [...this.myProduct].find(prod => prod.id === id);
    this.myProduct.delete(obj);
  }

  
}
