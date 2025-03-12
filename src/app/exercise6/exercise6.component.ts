import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise6',
  standalone: true,
  imports: [],
  templateUrl: './exercise6.component.html',
  styleUrl: './exercise6.component.scss'
})
export class Exercise6Component {
  titleString: string = '我是按鈕';
  showAlert() {
    alert(this.titleString)
  }
}
