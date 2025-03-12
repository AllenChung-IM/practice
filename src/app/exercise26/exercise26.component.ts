import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-exercise26',
  standalone: true,
  imports: [
    MatTabsModule,
    MatButtonModule,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './exercise26.component.html',
  styleUrl: './exercise26.component.scss'
})
export class Exercise26Component {
  links = [
    {path: './screen1', name: 'Link1'},
    {path: './screen2', name: 'Link2'},
    {path: './screen3', name: 'Link3'}
  ];
  activeLink = "";
}
