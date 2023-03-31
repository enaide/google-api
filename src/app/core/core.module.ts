import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent,NotFoundPageComponent } from './containers';

import { AppLayoutModule } from '../shared/mat-layout/app-layout/app-layout.module';
import { AppInfoModule } from '../shared/mat-components/app-info/app-info.module';
import { AppProductSearchModule } from '../shared/mat-components/app-product-search/app-product-search.module';
import { MatCardModule } from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { AppNavbarModule } from '../shared/mat-components/app-navbar/app-navbar.module';

export const COMPONENTS = [
  AppComponent,
  NotFoundPageComponent,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatListModule,
    AppLayoutModule,
    AppProductSearchModule,
    AppInfoModule,
    AppNavbarModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class CoreModule {}
