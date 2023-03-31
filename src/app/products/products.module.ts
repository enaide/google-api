import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.module';
import { LayoutModule } from '../shared/mat-layout/layout.module';

import { AppProductSearchModule } from '../shared/mat-components/app-product-search/app-product-search.module';
import { PipesModule } from '../shared/pipes';

import {
  ProductSearchPageViewComponent,
  CollectionPageComponent,
  ViewProductPageComponent,
  SelectedProductPageComponent,
} from './containers/products/';

import {
  ProductViewComponent,
  ProductDetailViewComponent,
  ProductFormComponent,
  ProductListViewComponent,
} from './components';

import * as fromProducts from '../products/reducers';
import { ProductEffects } from './effects/product.effects';
import { MaterialModule } from '../material';
import { CollectionEffects } from './effects/collection.effects';

export const COMPONENTS = [
  ProductFormComponent,
  ProductViewComponent,
  ProductDetailViewComponent,
  ProductListViewComponent,
];

export const CONTAINERS = [
  ProductSearchPageViewComponent,
  CollectionPageComponent,
  ViewProductPageComponent,
  SelectedProductPageComponent,
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    MatProgressSpinnerModule,
    ProductsRoutingModule,
    LayoutModule,
    AppProductSearchModule,
    StoreModule.forFeature(
      fromProducts.productsFeatureKey,
      fromProducts.reducers
    ),
    EffectsModule.forFeature([ProductEffects, CollectionEffects]),
    PipesModule,
  ],
  declarations: [COMPONENTS, CONTAINERS],
})
export class ProductsModule {}
