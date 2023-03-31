import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-info',
  template: ` <div class="company-info">
    <h3>Angular frontend developer</h3>
    <ul>
      <li>Full Stack</li>
      <li>(+53) 5409-2588</li>
      <li>ecfcode@gmail.com</li>
    </ul>
  </div>`,
  styles: [`.company-info {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    background: #ef7309;
    height: 100%;
    padding-top: 67px;
  }

  .company-info h3, .company-info ul {
    list-style: none;
    padding: 0;
    text-align: center;
    color: #032d42;
          font-size: 18px;
          font-weight: bold;
          border-radius: 3px;
  }

  @media(max-width: 768px){
    .company-info{
      padding-top: 10px
    }
  }`],
})
export class AppInfoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
