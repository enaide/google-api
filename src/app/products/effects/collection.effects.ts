import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { defer, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

import {
  SelectedProductPageActions,
  ViewCollectionPageActions,
  CacheApiActions,
} from '../actions';

import { Product } from 'src/app/shared/models';
import { CacheStorageService } from 'src/app/shared/services/cache-storage.service';

@Injectable()
export class CollectionEffects {

  loadCollection$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ViewCollectionPageActions.enter),
      switchMap(() =>
        this.cacheProductService.getCollection().pipe(
          map((products: Product[]) =>
            CacheApiActions.loadProductsSuccess({ products })
          ),
          catchError((error) =>
            of(CacheApiActions.loadProductsFailure({ error }))
          )
        )
      )
    )
  );

  addProductToCollection$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SelectedProductPageActions.addProduct),
      mergeMap(({ product }) =>
        this.cacheProductService.addToCollection([product]).pipe(
          map(() => CacheApiActions.addProductSuccess({ product })),
          catchError(() => of(CacheApiActions.addProductFailure({ product })))
        )
      )
    )
  );

  removeBookFromCollection$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SelectedProductPageActions.removeProduct),
      mergeMap(({ product }) =>
        this.cacheProductService.removeFromCollection([product.id]).pipe(
          map(() => CacheApiActions.removeProductSuccess({ product })),
          catchError(() =>
            of(CacheApiActions.removeProductFailure({ product }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private cacheProductService: CacheStorageService
  ) {}
}
