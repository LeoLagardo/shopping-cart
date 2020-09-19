import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  private category = new BehaviorSubject<string>('all');
  private product = new BehaviorSubject<any>(0);

  currentCategory = this.category.asObservable();
  newProduct = this.product.asObservable();
  constructor() { }

  changeCategory(category: string) {
    this.category.next(category);
  }

  addToCart(product: Product){
    this.product.next(product);
  }


}
