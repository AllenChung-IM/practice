import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-exercise12',
  standalone:true,
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  templateUrl: './exercise12.component.html',
  styleUrl: './exercise12.component.scss'
})
export class Exercise12Component {
  constructor( private router: Router ) {}

  toStartPage() {
    this.router.navigateByUrl('/exercise12');
  }

  toThirdComponent() {
    this.router.navigateByUrl('/exercise12/third');
  }

  toFourthComponent() {
    this.router.navigateByUrl('/exercise12/fourth');
  }
}
