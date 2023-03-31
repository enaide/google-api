import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppInfoComponent } from './app-info.component';

const components = [
  AppInfoComponent
];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule
  ],
  exports: [components]
})
export class AppInfoModule { }
