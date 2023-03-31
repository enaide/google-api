import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/shared/models';

@Component({
  selector: 'product-detail-view',
  templateUrl: './product-detail-view.component.html',
  styleUrls: ['./product-detail-view.component.scss'],
})
export class ProductDetailViewComponent {

  @Input() product!: Product;
  @Input() inCollection!: boolean;
  @Output() add = new EventEmitter<Product>();
  @Output() remove = new EventEmitter<Product>();

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

  get thumbnail() {
    return (
      this.product.volumeInfo.imageLinks &&
      this.product.volumeInfo.imageLinks.smallThumbnail &&
      this.product.volumeInfo.imageLinks.smallThumbnail.replace('http:', '')
    );
  }
}
