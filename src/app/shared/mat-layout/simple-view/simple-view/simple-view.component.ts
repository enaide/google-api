import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-simple-view',
  templateUrl: './simple-view.component.html',
  styleUrls: ['./simple-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleViewComponent {
  constructor() { }
}
