import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercise10',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './exercise10.component.html',
  styleUrl: './exercise10.component.scss'
})
export class Exercise10Component {
  grade: number = 1;
  attackForce: number = 10;
  defendForce: number = 10;
  gradeInput: number | null = null;

  gradeReset(){
    this.grade = 1;
    this.attackForce = 10;
    this.defendForce = 10;
    this.gradeInput = null;
  }

  gradeUp(){
    this.grade += 1;
    this.attackForce *= 3;
    this.defendForce *= 2;
  }

  gradeDown(){
    if (this.grade > 1){
      this.grade -= 1;
      this.attackForce /= 3;
      this.defendForce /= 2;
    }
  }

  gradeUpdate(){
    if (this.gradeInput == null || !Number.isInteger(this.gradeInput)) {
      alert('請輸入大於1的整數');
      return;
    }
    if (this.gradeInput >= 1){
      this.grade = this.gradeInput;
      this.attackForce = 10 * (3 ** (this.gradeInput - 1));
      this.defendForce =  10 * (2 ** (this.gradeInput - 1));
    }
    this.gradeInput = null;
  }
}
