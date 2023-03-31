import { searchProducts } from '../actions/find-product-page.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { FindProductPageActions, ProductsApiActions } from '../actions';
import { Product } from 'src/app/shared/models';

export const searchFeatureKey = 'search';

export interface State {
  query: string;
  ids: string[];
  loading: boolean;
  error: string;
}

const initialState: State = {
  query: '',
  ids: [],
  error: '',
  loading: false,
};

export const reducer = createReducer(
  initialState,
  on(FindProductPageActions.searchProducts, (state: State, { query }) => {
    return query === ''
      ? {
          query: '',
          ids: [],
          error: '',
          loading: false,
        }
      : {
          ...state,
          error: '',
          loading: true,
          query,
        };
  }),
  on(ProductsApiActions.searchSuccess, (state: State, { products }) => ({
    ...state,
    loading: false,
    ids: products.reduce(
      (prev, next) => (prev.includes(next.id) ? prev : [...prev, next.id]),
      [] as any
    ),
  })),
  on(ProductsApiActions.searchFailure, (state: State, { errorMsg }) => ({
    ...state,
    loading: false,
    error: errorMsg,
  }))
);

export const getQuery = (state: State) => state.query;
export const getLoading = (state: State) => state.loading;
export const getError = (state: State) => state.error;
export const getIds = (state: State) => state.ids;
