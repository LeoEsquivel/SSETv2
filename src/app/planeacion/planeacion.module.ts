import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaneacionRoutingModule } from './planeacion-routing.module';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PlaneacionRoutingModule
  ]
})
export class PlaneacionModule { }
