import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise7',
  standalone: true,
  imports: [],
  templateUrl: './exercise7.component.html',
  styleUrl: './exercise7.component.scss'
})
export class Exercise7Component {
  numberList: number[] = [];
  oddNumberList: number[] = [];
  remainderList: number[] = [];
  json!: string;
  minimumList: number[] = [4, 6, 1, 2, 7, 9, 12, 15, 13];
  minimum: number = this.minimumList[0];
  text: string = "你好我是Allen";
  textReverse: string = "";
  nameString: string = '我是Allen，你好';
  name!: String;


  ngOnInit():void {
    // 1
    for (let i = 1; i <= 50; i++) {
      this.numberList.push(i)
    }

    // 2
    this.oddNumberList = this.numberList.filter(num => num % 2 !== 0);

    // 3
    for (let i = 1; i <= 50; i++) {
      if (i % 3 == 2){
        this.remainderList.push(i);
      }
    }

    // 4
    let data = [
      {
        name: '小明',
        age: 10
      },
      {
        name: '小陳',
        age: 24
      },
      {
        name: '小王',
        age: 16
      }
    ]
    data.forEach((item) => {
      if (item.name == '小王') {
        item.age = 18;
      };
    })
    this.json = JSON.stringify(data);

    // 5
    for (let data of this.minimumList) {
      if (this.minimum > data) {
        this.minimum = data;
      }
    }

    // 6
    for (let i = this.text.length - 1; i >= 0; i--){
      this.textReverse += this.text[i];
    }

    // 7
    this.name = this.nameString.slice(this.nameString.indexOf('Allen'), this.nameString.indexOf('Allen') + 5);
  }
}
