import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../models/product';
import {ShareService} from '../shared/share.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  productList: Product[];
  category: string;

  constructor(private productService: ProductService, private shareService: ShareService) { }

  getProduct(){
    this.productList = this.productService.getProduct();
  }

  ngOnInit(): void {
    // this.getProduct();

    this.shareService.currentCategory.
      subscribe( category => {
        this.category = category;
        this.fliterProduct(category);
      });
  }

  fliterProduct(category){
    this.getProduct();
    if (category === 'all'){
      return this.productList;
    }
    this.productList = this.productList.filter(ele => {
      return ele.category === category;
    });
  }

}
