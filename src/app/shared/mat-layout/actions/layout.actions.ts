import { createAction, props } from '@ngrx/store';

export const typeInTheSearch = createAction(
  '[Layout] typeInTheSearch',
  props<{ searchValue: string }>()
);
