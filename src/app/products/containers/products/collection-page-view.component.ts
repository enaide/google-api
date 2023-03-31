import { Observable } from 'rxjs';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Product } from './../../../shared/models/product';
import { ViewCollectionPageActions } from '../../actions';
import * as fromProducts from '../../reducers';

@Component({
  selector: 'collection-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-simple-view>
      <app-simple-view-header
        ><span>My Collection</span></app-simple-view-header
      >
      <app-simple-view-body class="body">
        <product-list-view
          [products]="(products$ | async)!"
        ></product-list-view>
      </app-simple-view-body>
    </app-simple-view>
  `,
  styles: [
    `
      span {
        font-size: 18px;
        font-weight: bold;
        border-radius: 3px;
        display: flex;
        justify-content: center;
      }
    `,
  ],
})
export class CollectionPageComponent implements OnInit {
  products$!: Observable<Product[]>;
  constructor(private store: Store) {
    this.products$ = store.select(
      fromProducts.selectProductCollection
    ) as Observable<Product[]>;
  }

  ngOnInit() {
    this.store.dispatch(ViewCollectionPageActions.enter());
  }
}
