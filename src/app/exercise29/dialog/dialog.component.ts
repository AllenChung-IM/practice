import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    FormsModule
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {

  readonly dialogRef = inject (MatDialogRef<DialogComponent>) ;
  readonly data = inject<any>(MAT_DIALOG_DATA);

  ngOnInit(): void {
    console.log(this.data);
  }

  cancelClick() {
    this.dialogRef.close();
    alert("已取消");
  }

  confirmClick() {
    let returnData = "已確認";
    this.dialogRef.close(returnData);
    alert(returnData);
  }
}
