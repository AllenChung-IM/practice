import { Component } from '@angular/core';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

@Component({
  selector: 'app-exercise9',
  standalone: true,
  imports: [
    Page1Component,
    Page2Component
  ],
  templateUrl: './exercise9.component.html',
  styleUrl: './exercise9.component.scss'
})
export class Exercise9Component {

}
