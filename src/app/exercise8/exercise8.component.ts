import { Component } from '@angular/core';

@Component({
  selector: 'app-exercise8',
  standalone: true,
  imports: [],
  templateUrl: './exercise8.component.html',
  styleUrl: './exercise8.component.scss'
})
export class Exercise8Component {
  allenMoney1!: number;
  allenMoney2!: number;
  vipName: Array<String> = [];
  BMI!: number;
  BMIRegion!: String;

  ngOnInit():void {
    // 1
    this.allenMoney1 = 200 - this.buyHamburger(2) - this.buyFries(1);

    // 2
    this.allenMoney2 = 5000 - (this.buyHamburger(10) + this.buyFries(10)) * 0.9;

    // 3
    let jsonData = [
      {
        userName: 'Allen',
        payMoney: 500,
      },
      {
        userName: 'Ben',
        payMoney: 20,
      },
      {
        userName: 'Eric',
        payMoney: 120,
      },
    ]
    jsonData.forEach((item) => {
      if (item.payMoney >= 200){
        this.vipName.push(item.userName);
      }
    });

    //4
    this.BMI = this.calBMI(170,65);
    this.BMIRegion = this.evalBMI(this.BMI);
  }

  buyHamburger(num: number){
    let price = 50;
    return price * num;
  }

  buyFries(num: number){
    let price = 40;
    return price * num;
  }

  calBMI(height: number, weight: number){
    return weight/((height/100)**2);
  }

  evalBMI(BMI: number){
    if (BMI < 18.5) return "骨瘦如柴";
    if (18.5 <= BMI && BMI< 24) return "剛剛好";
    if (24 <= BMI) return "你太胖了";
    return ''
  }
}
