import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoutileriasComponent } from './demoutilerias/demoutilerias.component';




@NgModule({
  declarations: [DemoutileriasComponent],
  imports: [ //contenidos de otros lados o modulos que consume este modulo
    CommonModule // es parte de los paquetes de angular, aqui esta lo de ngif, ngfor, etc
  ],
  exports:[ //funcionalidades que se quieran que sean consumidos por otros modulos, lo que comparte este modulo a otros modulos
  DemoutileriasComponent
  ]
})
export class UtileriasModule { }
