import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/shared/models';

export const searchProducts = createAction(
  '[Products/API] search is needed',
  props<{ query: string }>()
);


export const searchSuccess = createAction(
  '[Products/API] Search Success',
  props<{ products: Product[] }>()
);

export const searchFailure = createAction(
  '[Products/API] Search Failure',
  props<{ errorMsg: string }>()
);
