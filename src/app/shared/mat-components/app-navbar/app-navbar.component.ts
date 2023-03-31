import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: ` <nav class="navbar">
    <ul class="nav">
      <li *ngFor="let nav of navBar">
        <a [routerLink]="nav.value"  routerLinkActive="active-link" [routerLinkActiveOptions]="{ exact: true }">
          {{ nav.text }}
        </a>
      </li>
    </ul>
  </nav>`,
  styles: [
    `
      .active-link {
        background-color: white;
        color: orange !important;
      }
      .navbar {
        dispaly: flex;
        justify-content: center;
      }
      .navbar a:hover {
        color: orange;
      }
      .navbar ul {
        display: flex;
      }
      .navbar ul li {
        margin-left: 20px;
      }
      .navbar a {
        text-decoration: none;
        color: #3474e6;
        font-size: 18px;
        font-weight: bold;
        border-radius: 3px;
      }
    `,
  ],
})
export class AppNavbarComponent implements OnInit {
  @Input() navBar!: {text: string; value: string}[];
  constructor() {}

  ngOnInit() {}
}
