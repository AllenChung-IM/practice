import { Component, Input, Output, EventEmitter, output} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
  @Input() jobInput!: string;
  @Input() gradeInput!: number;
  @Input() attackForceInput!: number;
  @Input() defendForceInput!: number;
  @Input() newGradeInput!: number | null;
  job!: string;
  grade!: number;
  attackForce!: number;
  defendForce!: number;
  newGrade!: number | null;
  @Output() response = new EventEmitter<string>();

  ngOnChanges(): void {
    this.gradeReset();
  }

  gradeReset() {
    this.job = this.jobInput;
    this.grade = this.gradeInput;
    this.attackForce = this.attackForceInput;
    this.defendForce = this.defendForceInput;
    this.newGrade = this.newGradeInput;
  }

  gradeUp() {
    this.grade += 1;
    this.attackForce *= 3;
    this.defendForce *= 2;
  }

  gradeDown() {
    if (this.grade > 1) {
      this.grade -= 1;
      this.attackForce /= 3;
      this.defendForce /= 2;
    }
  }

  gradeUpdate() {
    if (this.newGrade == null || !Number.isInteger(this.newGrade)) {
      alert('請輸入大於1的整數');
      return;
    }
    if (this.newGrade >= 1) {
      this.grade = this.newGrade;
      this.attackForce = this.attackForce * (3 ** (this.newGrade - 1));
      this.defendForce =  this.defendForce * (2 ** (this.newGrade - 1));
    }
    this.newGrade = null;
  }

  gradeConfirm() {
    const result = `職業: ${this.jobInput}, 等級: ${this.gradeInput}, 攻擊力: ${this.attackForceInput}, 防禦力: ${this.defendForceInput}`;
    this.response.emit(result);
    console.log(result);
  }
}
