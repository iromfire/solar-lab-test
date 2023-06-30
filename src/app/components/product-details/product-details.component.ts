import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IProduct } from '../../interfaces/product.interface';
import products from '../../../assets/products.json';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  product: IProduct;
  constructor(private route: ActivatedRoute) {
    const productId: number = Number(this.route.snapshot.paramMap.get('id'));
    this.product = products.find((p: IProduct): boolean => p.id === productId)!;
  }
}
