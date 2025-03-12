import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-exercise31',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatListModule
  ],
  templateUrl: './exercise31.component.html',
  styleUrl: './exercise31.component.scss'
})
export class Exercise31Component {
  showFiller = false;
}
