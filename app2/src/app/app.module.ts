import { BrowserModule } from '@angular/platform-browser'; // son componentes leidos del framework de angular
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component'; // importa el componente que es la clase AppComponent
//los modulos tienen varios componenetes
@NgModule({ //declarativa el modulo
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent] //primer componente que se ejecuta en la aplicacion
})
export class AppModule { } // esta usando lo de arriba
