import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppNavbarComponent } from './app-navbar.component';
import { RouterModule } from '@angular/router';

const components = [
  AppNavbarComponent
];

@NgModule({
  declarations: [AppNavbarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [components]
})
export class AppNavbarModule { }
