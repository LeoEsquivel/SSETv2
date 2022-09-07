import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Usuario } from '../../../interfaces/usuario';
import { AgregarUsuarioComponent } from './agregar-usuario/agregar-usuario.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [
    {
      id: 1,
      nombre: 'Daniel',
      apellidoP: 'Esquivel',
      apellidoM: 'Diaz',
      email: 'prueba1@test.com',
      admin: true,
      contrasena: '123456',
      niveles_educativos: [
        {
          id: 1,
          nivel_educativo: 'Primaria'
        },
        {
          id: 2,
          nivel_educativo: 'Elemental'
        }
      ]
    }
  ]
  constructor( private _dialog: MatDialog ) { }

  ngOnInit(): void {
  }

  registro() {
    const dialogRef = this._dialog.open( AgregarUsuarioComponent, {} );
    dialogRef.afterClosed().subscribe({
      next: res => {
        if (!res.data) {
          return
        }
        alert( res )
      }
    } )
  }


}
