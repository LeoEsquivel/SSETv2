import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NivelEducativo } from '../../../../interfaces/nivel-educativo';
import { Usuario } from '../../../../interfaces/usuario';
import { HttpService } from '../../../../services/http-services.service';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent implements OnInit {

  usuarioForm !: FormGroup;
  nivelesEducativos !: NivelEducativo[];
  usuario !: Usuario;

  constructor( public dialogRef: MatDialogRef<AgregarUsuarioComponent>,
               private _formBuilder: FormBuilder,
               private _httpService: HttpService,
               @Inject( MAT_DIALOG_DATA) public data: number ) { }

  ngOnInit(): void {

    this.usuarioForm = this._formBuilder.group({
      email:              [ '', [ Validators.required, Validators.email ] ],
      password:             [ '', [ Validators.required, Validators.min(6)] ],
      nombre:             [ '', [ Validators.required ] ],
      apellidoP:          [ '', [ Validators.required ] ],
      apellidoM:          [ '', [ Validators.required ] ],
      admin:              false,
      niveles_educativos: [ null ]
    } )

  }

  getErrorMessage() {
    if( this.usuarioForm.hasError('email')) {
      return 'Debe ingresar un valor.'
    }

    return this.usuarioForm.hasError('email') ? 'No es un correo valido.': '';
  }

  onClickNo(): void {
    this.dialogRef.close();
  }

  guardar() {
    const usuario = 'Guardao';

    this.dialogRef.close( { data: usuario } );
  }

}
