import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise16',
  standalone: true,
  imports: [],
  templateUrl: './exercise16.component.html',
  styleUrl: './exercise16.component.scss'
})
export class Exercise16Component {
  position!: number;
  array = [10, 20, 3, 5, 8, 9, 23, 657, 123, 67];

  ngOnInit(): void {
    for (let i = 0; i <= this.array.length; i++) {
      if (this.array[i] == 9) {
        this.position = i;
      }
    }
  }
}
