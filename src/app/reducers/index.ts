import {
  createSelector,
  createFeatureSelector,
  ActionReducer,
  Action,
  ActionReducerMap,
  MetaReducer,
} from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { InjectionToken } from '@angular/core';

import * as fromLayout from '../shared/mat-layout/reducers/layout.reducer';

export interface State {
  [fromLayout.layoutFeatureKey]: fromLayout.State;
}

export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<State, Action>>('Root reducers token', {
  factory: () => ({
    [fromLayout.layoutFeatureKey]: fromLayout.reducer,
    // router: routerReducer,
  }),
});

export const selectLayoutState = createFeatureSelector<fromLayout.State>(
  fromLayout.layoutFeatureKey
);

export const selectSearchStateValue = createSelector(selectLayoutState, fromLayout.selectSearchValue);
