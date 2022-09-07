import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NivelEducativo } from 'src/app/interfaces/nivel-educativo';
import { HttpService } from 'src/app/services/http-services.service';
import { Helper } from 'src/app/shared/helper';


@Component({
  selector: 'app-editar-niveles',
  templateUrl: './editar-niveles.component.html',
  styleUrls: ['./editar-niveles.component.css']
})
export class EditarNivelesComponent extends Helper implements OnInit {

  nuevoNivelForm !: FormGroup;

  displayedColumns = ["nivel", "acciones"];
  dataSource !: NivelEducativo[]; //Array niveles educativos del usuario;

  nivelesEducativos !: NivelEducativo[]; //Array con todos los niveles educativos;

  constructor( public dialogRef: MatDialogRef<EditarNivelesComponent>, private _formBuilder: FormBuilder,
               private _httpService: HttpService, @Inject (MAT_DIALOG_DATA) public data: number, _snackBar: MatSnackBar ) {
                super( _snackBar );
              }

  ngOnInit(): void {


    this.nuevoNivelForm = this._formBuilder.group({
      niveles_educativos: [ null, Validators.required ]
    })
  }

  eliminar( id: number, id_nivel: number ) {
    this.lanzarSnackbar('Nivel eliminado');
  }

  agregar( id: number ) {
    const nivel = this.nuevoNivelForm.value.niveles_educativos;
  }

}
