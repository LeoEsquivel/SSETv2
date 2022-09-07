import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuario';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { Helper } from 'src/app/shared/helper';
import { AgregarUsuarioComponent } from '../agregar-usuario/agregar-usuario.component';
import { EditarNivelesComponent } from '../editar-niveles/editar-niveles.component';

@Component({
  selector: 'app-usuario-tabla',
  templateUrl: './usuario-tabla.component.html',
  styleUrls: ['./usuario-tabla.component.css']
})
export class UsuarioTablaComponent extends Helper implements OnInit {

  @Input() data !: any;

  displayedColumns: string[] = ['correo', 'nombre', 'niveles', 'acciones'];
  dataSource !: MatTableDataSource<Usuario>;
  @ViewChild( MatPaginator ) paginator !: MatPaginator;

  constructor( private _dialog: MatDialog, _snackBar: MatSnackBar ) {
    super( _snackBar );
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource( this.data );
    this.dataSource.paginator = this.paginator;
  }

  eliminar( id:number ) {
    const dialogRef = this._dialog.open( ConfirmDialogComponent );

    dialogRef.afterClosed().subscribe({
      next: ( confirm:Boolean ) => {
        if(confirm) {
          this.lanzarSnackbar('Usuario eliminado');
        }
        return
      }
    } );

  }

  editarUsuario( id: number ) {
    const dialogRef = this._dialog.open( AgregarUsuarioComponent, { data: id } );

    dialogRef.afterClosed().subscribe({
      next: (res: Usuario) => {
        const { niveles_educativos, contrasena, ...usuario } = res;
        this.ngOnInit();
      },
      error: ( e ) => { alert(e) }
    })

  }

  editarNiveles( id:number ) {
    const dialogRef = this._dialog.open( EditarNivelesComponent, { data: id } );

    dialogRef.afterClosed().subscribe({
      next:() => {
        this.ngOnInit();
      },
      error: ( e ) => this.lanzarSnackbar(e)
    } );
  }
}
