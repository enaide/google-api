import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';

import { Product } from 'src/app/shared/models';
import { FindProductPageActions } from '../../actions';
import * as fromProducts from '../../reducers';

@Component({
  selector: 'default-view-product-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-product-search
      [searching]="(loading$ | async)!"
      [query]="(query$ | async)!"
      [error]="(error$ | async)!"
      (search)="searchFieldSearch($event)!"
    ></app-product-search>
    <product-list-view [products]="(products$ | async)!"></product-list-view>
  `,
})
export class ProductSearchPageViewComponent {
  products$!: Observable<Product[]>;
  productIds$!: Observable<string[]>;
  loading$!: Observable<boolean>;
  query$!: Observable<string>;
  error$!: Observable<string>;

  constructor(private store: Store<fromProducts.State>) {
    this.query$ = store.select(fromProducts.selectSearchQuery).pipe(take(1));
    this.loading$ = store.pipe(select(fromProducts.selectSearchLoading));
    this.products$ = store.select(fromProducts.selectSearchResults) as Observable<Product[]>;
    this.error$ = store.select(fromProducts.selectSearchError);
  }

  searchFieldSearch(query: string) {
    this.store.dispatch(FindProductPageActions.searchProducts({ query }));
  }
}
