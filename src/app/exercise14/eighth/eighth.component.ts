import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-eighth',
  standalone: true,
  imports: [],
  templateUrl: './eighth.component.html',
  styleUrl: './eighth.component.scss'
})
export class EighthComponent {
  @Input() outputData!: string;
}
