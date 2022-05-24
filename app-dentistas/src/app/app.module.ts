import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';//este es para el [ngModel]
import { HttpClientModule } from '@angular/common/http'; //para las peticiones HTTP
import { ComponentOne } from './app.component';
import { Ejemplo } from './app.ejemplo'; //aqui nada mas estamos importando la clase Ejemplo que en realidad es un compoenente
import {Tercero } from './app.tercero';
import {Cuarto } from './app.tercero';
import { QuintoComponent } from './quinto/quinto.component';
import { CounterComponent } from './counter/counter.component';
import { InfoPersonaComponent } from './info-persona/info-persona.component';
import { MatematicoComponent } from './matematico/matematico.component';
// import { SortPipe } from './shared/sort.pipe';
// import { CopyrightDirective } from './copyright.directive';
// import { NumericDirective } from './numeric.directive';
// import { PermissionDirective } from './permission.directive';
import {UtileriasModule} from './utilerias/utilerias.module'; //importamos el MODULO de utilerias
import{SharedModule} from './shared/shared.module';
import {AerolineaModule} from './aerolinea/aerolinea.module'
import { RouterModule,Routes } from '@angular/router';
import { DemoutileriasComponent } from './utilerias/demoutilerias/demoutilerias.component';
import { VuelosComponent } from './aerolinea/vuelos/vuelos.component';
import { DetallepersonaComponent } from './detallepersona/detallepersona.component';
const routes : Routes=[
  //{ path:'', component: ComponentOne },
  { path:'personas', component: InfoPersonaComponent },
  { path:'vuelos', component: VuelosComponent },
  { path:'personas/detallepersona/:num', component: DetallepersonaComponent }, // para enviar parametros en la url usamos los ":" y el nombre del parametro
  { path:'personas/detallepersona/:num/:gatitos', component: DetallepersonaComponent }, //se puede pedir mas de un parametro solo separando con una diagonal
  //{ path: '**', component: DemoutileriasComponent}
  {path: '**',redirectTo: '/'}
];
@NgModule({ //decorador de clase para el modulo
  declarations: [
    ComponentOne,
    Ejemplo, //aqui metemos el componente adrentro del modulo
    Tercero,
    Cuarto,
    QuintoComponent,
    CounterComponent,
    InfoPersonaComponent,
    MatematicoComponent,
    DetallepersonaComponent,
    // SortPipe,
    // CopyrightDirective,
    // NumericDirective,
    // PermissionDirective
  ],
  imports: [
    BrowserModule, //esto lo tiene por default el primer modulo que se crea en el proyecto
    UtileriasModule, // aqui esta la importacion del MODULO, se pone el modulo no el componente el componente se indica que se exporta en su propio modulo
    SharedModule,
    FormsModule, //forms del ng
    AerolineaModule,
    HttpClientModule, //para las peticiones HTTP
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [ComponentOne]
})
export class AppModule { }
