import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ExampleService } from '../../@services/example.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fifth',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './fifth.component.html',
  styleUrl: './fifth.component.scss'
})
export class FifthComponent {
  userInput!: string;

  constructor(
    private router: Router,
    private exampleService: ExampleService
  ) {}

  nextPage() {
     this.exampleService.userInput = this.userInput;
     this.router.navigateByUrl('exercise13/sixth')
  }
}
