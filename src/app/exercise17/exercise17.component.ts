import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise17',
  standalone: true,
  imports: [],
  templateUrl: './exercise17.component.html',
  styleUrl: './exercise17.component.scss'
})
export class Exercise17Component {
  userArray = [
    {
      userName: '玩家A',
      lev: 10,
      props: [
        {
          propsName: '蘑菇',
          amount: 5
        },
        {
          propsName: '金幣',
          amount: 15
        }
      ]
    },
    {
      userName: '玩家B',
      lev: 15,
      props: [
        {
          propsName: '龜殼',
          amount: 1
        },
        {
          propsName: '砲彈',
          amount: 15
        }
      ]
    }
  ]
}
