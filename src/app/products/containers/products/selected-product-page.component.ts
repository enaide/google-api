import { isSelectedProductInCollection } from './../../reducers/index';
import { filter, take } from 'rxjs/operators';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromProducts from '../../reducers';
import { Product } from './../../../shared/models/product';
import { SelectedProductPageActions } from '../../actions';

@Component({
  selector: 'selected-Product-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <product-detail-view
      [product]="(product$ | async)!"
      (add)="addToCollection($event)"
      (remove)="removeFromCollection($event)"
      [inCollection]="(isSelectedProductInCollection$ | async)!"
    >
    </product-detail-view>
  `,
})
export class SelectedProductPageComponent {
  product$!: Observable<Product>;
  isSelectedProductInCollection$!: Observable<boolean>;

  constructor(private store: Store) {
    this.product$ = store
      .select(fromProducts.selectSelectedProduct)
      .pipe(filter((val) => val !== undefined)) as Observable<Product>;
    this.isSelectedProductInCollection$ = store.select(
      fromProducts.isSelectedProductInCollection
    );
  }
  addToCollection(product: Product) {
    this.store.dispatch(SelectedProductPageActions.addProduct({ product }));
  }

  removeFromCollection(product: Product) {
    this.store.dispatch(SelectedProductPageActions.removeProduct({ product }));
  }
}
