import { createAction, props } from '@ngrx/store';

import { Product } from 'src/app/shared/models';


export const addProductSuccess = createAction(
  '[Cache/API] Add product Success',
  props<{ product: Product }>()
);
export const addProductFailure = createAction(
  '[Cache/API] Add Product Failure',
  props<{ product: Product }>()
);


export const removeProductSuccess = createAction(
  '[Cache/API] Remove Product Success',
  props<{ product: Product }>()
);
export const removeProductFailure = createAction(
  '[Cache/API] Remove Product Failure',
  props<{ product: Product }>()
);


export const loadProductsSuccess = createAction(
  '[Cache/API] Load Products Success',
  props<{ products: Product[] }>()
);
export const loadProductsFailure = createAction(
  '[Cache/API] Load Products Failure',
  props<{ error: any }>()
);
