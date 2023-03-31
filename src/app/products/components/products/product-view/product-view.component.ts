import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from 'src/app/shared/models';
@Component({
  selector: 'product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
})
export class ProductViewComponent {
  @Input() product!: Product;

  get id() {
    return this.product.id;
  }

  get title() {
    return this.product.volumeInfo.title;
  }

  get subtitle() {
    return this.product.volumeInfo.subtitle;
  }

  get description() {
    return this.product.volumeInfo.description;
  }

  get thumbnail(): string | boolean {
    if (this.product.volumeInfo.imageLinks) {
      return this.product.volumeInfo.imageLinks.smallThumbnail.replace(
        'http:',
        ''
      );
    }

    return false;
  }
}
