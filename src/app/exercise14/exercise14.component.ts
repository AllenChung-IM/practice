import { Component } from '@angular/core';
import { SeventhComponent } from './seventh/seventh.component';
import { EighthComponent } from './eighth/eighth.component';

@Component({
  selector: 'app-exercise14',
  standalone: true,
  imports: [
    SeventhComponent,
    EighthComponent
  ],
  templateUrl: './exercise14.component.html',
  styleUrl: './exercise14.component.scss'
})
export class Exercise14Component {
  outputData!: string;

  showData(event: string) {
    this.outputData = event;
  }
}
