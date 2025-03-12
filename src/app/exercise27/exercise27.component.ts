import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-exercise27',
  standalone: true,
  imports: [
    MatSelectModule,
    MatFormFieldModule
  ],
  templateUrl: './exercise27.component.html',
  styleUrl: './exercise27.component.scss'
})
export class Exercise27Component {
  selected = 'option2';
}
