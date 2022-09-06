import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CapturistaRoutingModule } from './capturista-routing.module';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CapturistaRoutingModule
  ]
})
export class CapturistaModule { }
