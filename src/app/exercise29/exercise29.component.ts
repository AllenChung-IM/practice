import { Component, inject} from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-exercise29',
  standalone: true,
  imports: [],
  templateUrl: './exercise29.component.html',
  styleUrl: './exercise29.component.scss'
})
export class Exercise29Component {

  dialog = inject(MatDialog);


  openDialog() {
    const dialog = this.dialog.open(DialogComponent, {
      data: {
        name: 'Allen',
      },
    });

    dialog.afterClosed().subscribe(result => {
      console.log(result) ;
    });
  }
}
