import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientesComponent} from './clientes/clientes.component'
import {FacturasComponent} from './facturas/facturas.component'
import {ReportesComponent} from './reportes/reportes.component'
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component'


const routes: Routes = [
  {path:'clientes', component: ClientesComponent},
  {path:'reportes', component: ReportesComponent},
  {path:'facturas', component: FacturasComponent},
  {path:'**', component: PagenotfoundComponent} //toda ruta no existente llamara al componentente page not found
]; //aqui van las rutas del proyecto

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
