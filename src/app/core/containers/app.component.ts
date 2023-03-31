import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject, Observable, of } from 'rxjs';

import * as fromLayout from '../../shared/mat-layout/reducers/layout.reducer';
import { LayoutActions } from 'src/app/shared/mat-layout/actions';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-layout>
      <app-app-info></app-app-info>
      <div class="main-container">
        <app-navbar [navBar]="navBar"></app-navbar>
        <router-outlet></router-outlet>
      </div>
    </app-layout>
  `,
  styles: [
    `.main-container {
        min-height: 400px;
      }
    `,
  ],
})
export class AppComponent implements OnInit, OnDestroy {
  navBar = [
    { text: 'Collections', value: 'products' },
    { text: 'Find books', value: 'products/find' },
  ];

  navFilter$ = new BehaviorSubject(this.navBar[0].value);

  constructor(private store: Store<fromLayout.State>) {}

  ngOnInit() {}

  ngOnDestroy() {}
}
