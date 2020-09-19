import { Injectable } from '@angular/core';
import {Product} from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, 'Jeans', 'cool blue jeans', 799, 'Mens'),
    new Product(2, 'Shirt', 'cool shirt', 499, 'Mens'),
    new Product(3, 'Shoe', 'cool shoe', 399, 'Mens'),
    new Product(4, 'T-shirt', 'cool tshirt', 299, 'Mens'),
    new Product(5, 'Belt 1', 'cool belt', 99, 'Mens'),
    new Product(6, 'Belt 2', 'cool belt 1', 99, 'Mens'),
    new Product(7, 'Belt 3', 'cool belt 2', 99, 'Mens'),
    new Product(8, 'Belt 4', 'cool belt 3', 99, 'Mens'),
    new Product(9, 'Top', 'cool top', 799, 'Womens'),
    new Product(10, 'Jeans', 'cool blue jeans', 799, 'Womens'),
    new Product(11, 'Bottom', 'cool bottom', 799, 'Womens'),
    new Product(12, 'Heels', 'cool heels', 799, 'Womens'),
    new Product(13, 'Shirt 1', 'cool shirt 1', 799, 'Womens'),
    new Product(14, 'Shirt 2', 'cool shirt 2', 799, 'Womens'),
    new Product(15, 'Shirt 3', 'cool shirt 3', 799, 'Womens'),
    new Product(16, 'Shirt 4', 'cool shirt 4', 799, 'Womens'),
    new Product(17, 'Shoes', 'cool shoes', 799, 'Children'),
    new Product(18, 'Jeans', 'cool blue jeans', 799, 'Children'),
    new Product(19, 'Kid Watch', 'cool blue jeans', 799, 'Children'),
    new Product(20, 'Cap', 'cool blue jeans', 799, 'Children'),
    new Product(21, 'Toy 1', 'cool toy 1', 99, 'Children'),
    new Product(22, 'Toy 2', 'cool toy 2', 99, 'Children'),
    new Product(23, 'Toy 3', 'cool toy 3', 99, 'Children'),
    new Product(24, 'Toy 4', 'cool toys 4', 99, 'Children'),
  ];

  constructor() { }

  getProduct(): Product[] {
    return this.products;
  }
}
