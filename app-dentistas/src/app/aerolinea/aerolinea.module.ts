import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VuelosComponent } from './vuelos/vuelos.component' //Componente Vuelo
import { FormsModule } from '@angular/forms';//este es para el [ngModel]
import { HttpClientModule } from '@angular/common/http'; //para las peticiones HTTP



@NgModule({
  declarations: [VuelosComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    VuelosComponent
  ]
})
export class AerolineaModule { }
