import { createReducer, on } from '@ngrx/store';
import { LayoutActions } from '../actions';

export const layoutFeatureKey = 'layout';

export interface State {
  searchValue: string;
}

const initialState: State = {
  searchValue: '',
};

export const reducer = createReducer(
  initialState,
  on(LayoutActions.typeInTheSearch, (state: State, { searchValue }) => ({
    searchValue,
  }))
);

export const selectSearchValue = (state: State) => state.searchValue;
