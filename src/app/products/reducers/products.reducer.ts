import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { CacheApiActions, ProductsApiActions, ViewProductPageActions } from '../actions';
import { Product } from 'src/app/shared/models';

export const productsFeatureKey = 'products';

export interface Dictionary {
  [id: string]: Product | undefined;
}

export interface State {
  ids: string[] | number[];
  entities: Dictionary;
  selectedProductId: string | null;
  loading: boolean;
  error: string;
}

const initialState: State = {
  ids: [],
  entities: {},
  selectedProductId: null,
  loading: false,
  error: '',
};

export const reducer = createReducer(
  initialState,
  on(ViewProductPageActions.selectProduct, (state: State, { id }) => ({
    ...state,
    selectedProductId: id,
  })),
  on(ProductsApiActions.searchSuccess,
    CacheApiActions.loadProductsSuccess, (state: State, { products }) => ({
    ...state,
    ids: products.reduce((prev, next) => (prev.includes(next.id) ? prev : [...prev, next.id]),
      [] as any
    ),
    entities: products.reduce((prev, next) => {
      const prop = next.id;
      return {
        ...prev,
        [prop]: next
        // [prop]: prev[prop] ? [...prev[prop], next] : [next], for multi values
      };
    }, {} as any),
    loading: false,
  })),
  on(ProductsApiActions.searchFailure, (state: State, { errorMsg }) => ({
    ...state,
    loading: false,
    error: errorMsg,
  }))
);

export const selectId = (state: State) => state.selectedProductId;
export const selectIds = (state: State) => state.ids;
export const selectEntities = (state: State) => state.entities;
