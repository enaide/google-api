import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { asyncScheduler, EMPTY as empty, of } from 'rxjs';
import {
  catchError,
  debounceTime,
  map,
  skip,
  switchMap,
  takeUntil,
} from 'rxjs/operators';

import { Product } from 'src/app/shared/models';
import { FindProductPageActions, ProductsApiActions } from '../actions';
import { GoogleBooksService } from 'src/app/shared/services/google-books.service';

@Injectable()
export class ProductEffects {
  search$ = createEffect(
    () =>
      ({ debounce = 500, scheduler = asyncScheduler } = {}) =>
        this.actions$.pipe(
          ofType(FindProductPageActions.searchProducts),
          debounceTime(debounce, scheduler),
          switchMap(({ query }) => {
            if (query === '') {
              return empty;
            }

            const nextSearch$ = this.actions$.pipe(
              ofType(FindProductPageActions.searchProducts),
              skip(1)
            );

            return this.googleBooks.searchBooks(query).pipe(
              takeUntil(nextSearch$),
              map((products: Product[]) =>
                ProductsApiActions.searchSuccess({ products })
              ),
              catchError((err) =>
                of(ProductsApiActions.searchFailure({ errorMsg: err.message }))
              )
            );
          })
        )
  );

  constructor(
    private actions$: Actions,
    private googleBooks: GoogleBooksService
  ) {}
}
