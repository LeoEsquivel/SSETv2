import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HttpService } from '../services/http-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm = this.fb.group({
    usuario: ['', Validators.required],
    password: ['', Validators.required]
  });

  loading: boolean = false;


  constructor( private fb: FormBuilder, private _snackBar: MatSnackBar,
               private router: Router, private _httpServices: HttpService ) {


  }

  ngOnInit(): void {
    // if(localStorage.getItem('x-token')){
    //   this.router.navigate(['dashboard']);
    // }
  }

  Ingresar(){
    const usuario = this.loginForm.value.usuario;
    const password = this.loginForm.value.password;

    let resp =  this._httpServices.login( usuario, password );

    if (resp?.tipo === 1) {
      this.router.navigate(['admin'])
    }

    if (resp?.tipo === 2) {
      this.router.navigate(['enlace'])
    }

    if (resp?.tipo === 3) {
      this.router.navigate(['planeacion'])
    }

    // this._httpService.login(usuario, password).subscribe(
    //   ( res:any) => {
    //       this._userServices.setUsuario(res["usuario"]);
    //       localStorage.setItem('x-token', res.token);
    //       this.router.navigate(['dashboard']);

    //   }, err => {
    //     this.error();
    //   }
    // )
  }

  error(){
    this._snackBar.open('Usuario o contraseña invalidos.', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

}

