import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { CiclosEscolaresComponent } from './pages/ciclos-escolares/ciclos-escolares.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { UsuarioTablaComponent } from './components/usuario-tabla/usuario-tabla.component';
import { DictamenesComponent } from './pages/dictamenes/dictamenes.component';
import { ModelosComponent } from './pages/modelos/modelos.component';
import { MotivosComponent } from './pages/motivos/motivos.component';
import { MunicipiosComponent } from './pages/municipios/municipios.component';
import { NivelesEducativosComponent } from './pages/niveles-educativos/niveles-educativos.component';
import { FuncionesPersonalComponent } from './pages/funciones-personal/funciones-personal.component';
import { SostenimientosComponent } from './pages/sostenimientos/sostenimientos.component';
import { SubsistemasComponent } from './pages/subsistemas/subsistemas.component';
import { SubsubsistemasComponent } from './pages/subsubsistemas/subsubsistemas.component';
import { ThrsComponent } from './pages/thrs/thrs.component';
import { TipoBajasComponent } from './pages/tipo-bajas/tipo-bajas.component';
import { TurnoComponent } from './pages/turno/turno.component';
import { AgregarUsuarioComponent } from './pages/usuarios/agregar-usuario/agregar-usuario.component';
import { EditarNivelesComponent } from './pages/usuarios/editar-niveles/editar-niveles.component';


@NgModule({
  declarations: [
    AgregarUsuarioComponent,
    CiclosEscolaresComponent,
    DictamenesComponent,
    EditarNivelesComponent,
    FuncionesPersonalComponent,
    HomeComponent,
    ModelosComponent,
    MotivosComponent,
    MunicipiosComponent,
    NivelesEducativosComponent,
    SidenavComponent,
    SostenimientosComponent,
    SubsistemasComponent,
    SubsubsistemasComponent,
    ThrsComponent,
    TipoBajasComponent,
    TurnoComponent,
    UsuariosComponent,
    UsuarioTablaComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AdminModule { }
