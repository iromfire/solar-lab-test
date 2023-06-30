import { Component } from '@angular/core';

import { IProduct } from '../../interfaces/product.interface';
import products from '../../../assets/products.json';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products: IProduct[];
  constructor(public searchService: SearchService) {
    this.products = products;
  }
}
