import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<ConfirmDialogComponent>) {
    dialogRef.disableClose = true;
  }

  ngOnInit(): void {
  }

  onClickNo(): void {
    this.dialogRef.close(false);
  }

  onClickYes(): void {
    this.dialogRef.close(true)
  }

}
