import { MatSnackBar } from "@angular/material/snack-bar";

export class Helper {

  public constructor( private _snackBar: MatSnackBar ) {

  }

  protected lanzarSnackbar( mensaje: string) {
    this._snackBar.open( mensaje, '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    } );
  }


}
