import { Product } from './../../../../shared/models/product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'product-list-view',
  template: `
    <product-view *ngFor="let product of products" [product]="product"></product-view>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
    `,
  ],
})
export class ProductListViewComponent {
  @Input() products!: Product[];
}
