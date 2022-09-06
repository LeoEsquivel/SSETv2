import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnlaceRoutingModule } from './enlace-routing.module';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    EnlaceRoutingModule
  ]
})
export class EnlaceModule { }
