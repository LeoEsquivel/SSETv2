import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../admin/pages/home/home.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { CiclosEscolaresComponent } from './pages/ciclos-escolares/ciclos-escolares.component';
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

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: UsuariosComponent
      },
      {
        path: 'users',
        component: UsuariosComponent
      },
      {
        path: 'ciclos_escolares',
        component: CiclosEscolaresComponent
      },
      {
        path: 'dictamenes',
        component: DictamenesComponent
      },
      {
        path: 'modelos',
        component: ModelosComponent
      },
      {
        path: 'motivos',
        component: MotivosComponent
      },
      {
        path: 'municipios',
        component: MunicipiosComponent
      },
      {
        path: 'niveles_educativos',
        component: NivelesEducativosComponent
      },
      {
        path: 'personal_p_funcion',
        component: FuncionesPersonalComponent
      },
      {
        path: 'sostenimientos',
        component: SostenimientosComponent
      },
      {
        path: 'subsistemas',
        component: SubsistemasComponent
      },
      {
        path: 'subsubsistemas',
        component: SubsubsistemasComponent
      },
      {
        path: 'thrs',
        component: ThrsComponent
      },
      {
        path: 'tipo_bajas',
        component: TipoBajasComponent
      },
      {
        path: 'turno',
        component: TurnoComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
