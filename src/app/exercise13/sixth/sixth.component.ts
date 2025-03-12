import { Component } from '@angular/core';
import { ExampleService } from '../../@services/example.service';

@Component({
  selector: 'app-sixth',
  standalone: true,
  imports: [],
  templateUrl: './sixth.component.html',
  styleUrl: './sixth.component.scss'
})
export class SixthComponent {
  userInput!: string;

  constructor( private exampleService: ExampleService ) {}

  ngOnInit() {
    this.userInput = this.exampleService.userInput;
  }
}
