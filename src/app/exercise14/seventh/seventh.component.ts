import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-seventh',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './seventh.component.html',
  styleUrl: './seventh.component.scss'
})
export class SeventhComponent {
  userInput!: string;
  @Output() inputData = new EventEmitter<string>();

  submit() {
    this.inputData.emit(this.userInput);
  }
}
