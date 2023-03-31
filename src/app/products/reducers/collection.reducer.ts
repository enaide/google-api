import { addProductFailure } from '../actions/cache-api.actions';
import { createReducer, on } from '@ngrx/store';
import {
  ViewCollectionPageActions,
  SelectedProductPageActions,
  CacheApiActions,
} from '../actions';
import { Product } from 'src/app/shared/models';
import { state } from '@angular/animations';

export const collectionFeatureKey = 'collection';

export interface State {
  loaded: boolean;
  loading: boolean;
  ids: string[];
}

export const initialState: State = {
  loaded: false,
  loading: false,
  ids: [],
};

export const reducer = createReducer(
  initialState,
  on(ViewCollectionPageActions.enter, (state) => ({ ...state, loading: true })),
  on(CacheApiActions.loadProductsSuccess, (state, { products }) => ({
    ...state,
    loaded: true,
    loading: false,
    ids: products.reduce(
      (acc, next) => (acc.includes(next.id) ? acc : [...acc, next.id]),
      [] as any
    ),
  })),
  on(
    SelectedProductPageActions.addProduct,
    CacheApiActions.removeProductFailure,
    (state, { product }) => {
      return state.ids.indexOf(product.id) > -1
        ? {
            ...state,
          }
        : {
            ...state,
            ids: [...state.ids, product.id],
          };
    }
  ),
  on(
    SelectedProductPageActions.removeProduct,
    CacheApiActions.addProductFailure,
    (state, { product }) => ({
      ...state,
      ids: [...state.ids.filter((id) => id !== product.id)],
    })
  )
);

export const getLoaded = (state: State) => state.loaded;
export const getLoading = (state: State) => state.loading;
export const getIds = (state: State) => state.ids;
