import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  CollectionPageComponent,
  ProductSearchPageViewComponent,
  ViewProductPageComponent,
} from './containers/products';

export const routes: Routes = [
  {
    path: 'find',
    component: ProductSearchPageViewComponent,
    // data: { title: 'Find book' },
  },
  {
    path: ':id',
    component: ViewProductPageComponent,
    // canActivate: [BookExistsGuard],
    data: { title: 'Book details' },
  },
  {
    path: '',
    component: CollectionPageComponent,
    data: { title: 'Collection' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
