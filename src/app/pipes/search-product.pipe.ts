import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';

@Pipe({
  name: 'search',
})
export class SearchProductPipe implements PipeTransform {
  transform(products: IProduct[], searchValue: string = ''): IProduct[] {
    if (!searchValue.trim()) {
      return products;
    }
    return products.filter((product) => {
      const productValues: string = Object.values(product)
        .join(' ')
        .toLowerCase();
      return productValues.includes(searchValue.toLowerCase());
    });
  }
}
