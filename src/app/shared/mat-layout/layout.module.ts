import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutModule as CdkLayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';

import { SimpleViewComponent } from './simple-view/simple-view/simple-view.component';
import { SimpleViewHeaderComponent } from './simple-view/simple-view-header/simple-view-header.component';
import { SimpleViewBodyComponent } from './simple-view/simple-view-body/simple-view-body.component';

import { MatExpansionModule } from '@angular/material/expansion';

const components = [
  SimpleViewComponent,
  SimpleViewHeaderComponent,
  SimpleViewBodyComponent,
];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDividerModule,
    MatTabsModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatCardModule,
    RouterModule,
    CdkLayoutModule,
    MatExpansionModule,

  ],
  exports: [components],
  providers: []
})
export class LayoutModule {}
