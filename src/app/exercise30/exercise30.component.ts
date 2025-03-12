import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingService } from '../@loading-services/loading.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exercise30',
  standalone: true,
  imports: [
    MatProgressSpinnerModule,
    CommonModule
  ],
  templateUrl: './exercise30.component.html',
  styleUrl: './exercise30.component.scss'
})
export class Exercise30Component {
  loading$!: any;

  constructor(private loadingService: LoadingService) {}

  ngOnInit(): void {
    this.loading$ = this.loadingService.loading$;
  }

  loadingStart () {
    this.loadingService.show();
    setTimeout(() => {
      this.loadingService.hide();
    }, 3000);
  }

  loadingHide () {
    this.loadingService.hide();
  }
}
