import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise19',
  standalone: true,
  imports: [],
  templateUrl: './exercise19.component.html',
  styleUrl: './exercise19.component.scss'
})
export class Exercise19Component {
  userArray: userData = {
    userName: "Allen",
    lev: 18,
    props: [
      {
        propsName: "蘑菇",
        amount: 5
      },
      {
        propsName: "金幣",
        amount: 15
      }
    ]
  }

}

interface userData{
  userName: string,
  lev: number,
  props: Array<props>
}

interface props {
  propsName: string,
  amount: number
}
