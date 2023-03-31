import { createAction, props } from '@ngrx/store';

import { Product } from 'src/app/shared/models';

export const searchSuccess = createAction(
  '[Products/API] Search Success',
  props<{ books: Product[] }>()
);

export const searchFailure = createAction(
  '[Products/API] Search Failure',
  props<{ errorMsg: string }>()
);
