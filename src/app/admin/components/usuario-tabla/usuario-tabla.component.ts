import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-usuario-tabla',
  templateUrl: './usuario-tabla.component.html',
  styleUrls: ['./usuario-tabla.component.css']
})
export class UsuarioTablaComponent implements OnInit {

  @Input() data !: any;

  displayedColumns: string[] = ['correo', 'nombre', 'niveles', 'acciones'];
  dataSource !: MatTableDataSource<Usuario>;
  @ViewChild( MatPaginator ) paginator !: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource( this.data );
    this.dataSource.paginator = this.paginator;
  }

  eliminar( id:number ) {}

  registro() {}

  editarUsuario( id: number ) {}

  editarNiveles( id:number ) {}
}
