import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-simple-view-header',
  templateUrl: './simple-view-header.component.html',
  styleUrls: ['./simple-view-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleViewHeaderComponent {

  constructor() { }
}
