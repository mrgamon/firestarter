import { Component, Input } from '@angular/core';

import { ProductService } from '../product.service';

import { Product } from '../product-model';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {

  @Input()
  product: Product;

  constructor(private productService: ProductService) { }

  addHeartToProduct(val: number) {
    if (this.product.id) {
      this.productService.updateProduct(this.product.id, { hearts: val + 1 });
    } else {
      console.error('Note missing ID!');
    }
  }

  deleteProduct(id: string) {
    this.productService.deleteProduct(id);
  }

}
