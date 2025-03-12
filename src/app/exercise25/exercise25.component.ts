import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise25',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './exercise25.component.html',
  styleUrl: './exercise25.component.scss'
})
export class Exercise25Component {
  getClassCss(cssStyle: string) {
    if (cssStyle == "test1") {
      return "test1";
    } else if (cssStyle == "test2") {
      return "test2";
    }
    else if (cssStyle == "both") {
      return "both";
    }
    return "test1";
  }

  // getClassCss() {
  //   return "test1";
  // }
}
