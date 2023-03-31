import { Product } from './../../shared/models/product';
import {
  createSelector,
  createFeatureSelector,
  combineReducers,
  Action,
} from '@ngrx/store';

import * as fromRoot from '../../reducers';
import * as fromSearch from './search.reducer';
import * as fromProducts from './products.reducer';
import * as fromCollection from './collection.reducer';

export const productsFeatureKey = 'products';

export interface ProductsState {
  [fromSearch.searchFeatureKey]: fromSearch.State;
  [fromProducts.productsFeatureKey]: fromProducts.State;
  [fromCollection.collectionFeatureKey]: fromCollection.State;
}

export interface State extends fromRoot.State {
  [productsFeatureKey]: ProductsState;
}

export function reducers(state: ProductsState | undefined, action: Action) {
  return combineReducers({
    [fromSearch.searchFeatureKey]: fromSearch.reducer,
    [fromProducts.productsFeatureKey]: fromProducts.reducer,
    [fromCollection.collectionFeatureKey]: fromCollection.reducer,
  })(state, action);
}

export const selectProductsState =
  createFeatureSelector<ProductsState>(productsFeatureKey);

export const selectProductEntitiesState = createSelector(
  selectProductsState,
  (state: ProductsState) => state.products
);

export const selectSelectedProductId = createSelector(
  selectProductEntitiesState,
  fromProducts.selectId
);

export const selectProductIds = createSelector(
  selectProductEntitiesState,
  fromProducts.selectIds
);
export const selectProductEntities = createSelector(
  selectProductEntitiesState,
  fromProducts.selectEntities
);
export const selectAllProducts = createSelector(
  selectProductEntities,
  selectProductIds,
  (entities, ids) => {
    return ids.map((id) => entities[id]);
  }
);
export const selectSelectedProduct = createSelector(
  selectProductEntities,
  selectSelectedProductId,
  (entities, selectedId) => {
    return selectedId && entities[selectedId];
  }
);
export const selectTotalProducts = createSelector(
  selectProductIds,
  (ids) => ids.length
);

export const selectSearchState = createSelector(
  selectProductsState,
  (state: ProductsState) => state.search
);
export const selectSearchQuery = createSelector(
  selectSearchState,
  fromSearch.getQuery
);
export const selectSearchLoading = createSelector(
  selectSearchState,
  fromSearch.getLoading
);
export const selectSearchError = createSelector(
  selectSearchState,
  fromSearch.getError
);
export const selectSearchProductIds = createSelector(
  selectSearchState,
  fromSearch.getIds
);
export const selectSearchResults = createSelector(
  selectSearchProductIds,
  selectProductEntities,
  (searchIds, products) => {
    return searchIds.map((id) => products[id]);
  }
);

export const selectCollectionState = createSelector(
  selectProductsState,
  (state: ProductsState) => state.collection
);
export const selectCollectionLoaded = createSelector(
  selectCollectionState,
  fromCollection.getLoaded
);
export const selectCollectionLoading = createSelector(
  selectCollectionState,
  fromCollection.getLoading
);
export const selectCollectionProductsIds = createSelector(
  selectCollectionState,
  fromCollection.getIds
);
export const selectProductCollection = createSelector(
  selectCollectionProductsIds,
  selectProductEntities,
  (ids, entities) => {
    return ids
    .map((id) => entities[id])
    .filter((product): product is Product => product != null);;
  }
);
export const isSelectedProductInCollection = createSelector(
  selectSelectedProductId,
  selectCollectionProductsIds,
  (selected, ids) => {
    return !!selected && ids.indexOf(selected) > -1
  }
);
