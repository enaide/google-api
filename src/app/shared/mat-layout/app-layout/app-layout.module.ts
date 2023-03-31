import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { AppLayoutComponent } from './app-layout.component';
// import { AppInfoModule } from '../../mat-components/app-info/app-info.module';
// import { AppProductSearchModule } from '../../mat-components/app-product-search/app-product-search.module';
const components = [
  AppLayoutComponent
];

@NgModule({
  declarations: [AppLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    // AppInfoModule,
    // AppProductSearchModule,
  ],
  exports: [components]
})
export class AppLayoutModule { }
