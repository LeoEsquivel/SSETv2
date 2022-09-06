import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

interface Usuario {
  error ?: boolean;
  nombre: string;
  correo: string;
  password: string;
  tipo: number;
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  usuarios: Usuario[] = [
    {
      error: false,
      nombre: 'Leo',
      correo: 'prueba1@test.com',
      password: '123456',
      tipo: 1
    },
    {
      error: false,
      nombre: 'Daniel',
      correo: 'prueba2@test.com',
      password: '123456',
      tipo: 2
    },
    {
      error: false,
      nombre: 'Tercero',
      correo: 'prueba3@test.com',
      password: '123456',
      tipo: 3
    }
  ];

  constructor( private http: HttpClient ) { }

  login( correo: string, password: string ) {

    return this.usuarios.find( user => user.correo === correo && user.password === password );
  }
}
