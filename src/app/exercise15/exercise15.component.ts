import { Component } from '@angular/core';
import { CalculatorComponent } from "./calculator/calculator.component";

@Component({
  selector: 'app-exercise15',
  standalone: true,
  imports: [
    CalculatorComponent
  ],
  templateUrl: './exercise15.component.html',
  styleUrl: './exercise15.component.scss'
})
export class Exercise15Component {
  job!: string;
  grade!: number;
  attackForce!: number;
  defendForce!: number;
  newGrade!: number | null;
  responseData!: any;

  ngOnInit(): void {
    this.Mage();
  }

  Mage() {
    this.job = "法師";
    this.grade = 1;
    this.attackForce = 10;
    this.defendForce = 10;
    this.newGrade = null;
  }

  Warrior() {
    this.job = "戰士";
    this.grade = 1;
    this.attackForce = 20;
    this.defendForce = 20;
    this.newGrade = null;
  }

  Tank() {
    this.job = "坦克";
    this.grade = 1;
    this.attackForce = 30;
    this.defendForce = 30;
    this.newGrade = null;
  }

  showData(event: string) {
    alert(event);
  }
}
