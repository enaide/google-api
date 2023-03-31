import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatExpansionModule } from '@angular/material/expansion';
import { AppProductSearchComponent } from './app-product-search.component';

const components = [
  AppProductSearchComponent
];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatExpansionModule,
    RouterModule,
  ],
  exports: [components],
  providers: []
})
export class AppProductSearchModule {}
