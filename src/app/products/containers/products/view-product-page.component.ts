import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { ViewProductPageActions } from '../../actions';

@Component({
  selector: 'view-product-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <selected-Product-page></selected-Product-page>
  `,
})
export class ViewProductPageComponent implements OnDestroy {
  actionsSubscription: Subscription;

  constructor(store: Store, route: ActivatedRoute) {
    this.actionsSubscription = route.params
      .pipe(map((params) => ViewProductPageActions.selectProduct({ id: params['id'] })))
      .subscribe((action) => store.dispatch(action));
  }

  ngOnDestroy() {
    this.actionsSubscription.unsubscribe();
  }
}
