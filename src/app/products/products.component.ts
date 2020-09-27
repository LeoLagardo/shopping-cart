import { Component, Input, OnInit } from '@angular/core';
import {Product} from '../models/product';
import {ShareService} from '../shared/share.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() product: Product;

  added = false;

  // btnText = 'Add to cart';

  constructor(private shareService: ShareService) { }

  ngOnInit(): void {}

  addToCart(product: Product){
    this.shareService.addToCart(product);
    this.added = true;
    // this.btnText = 'Added';
  }

}
