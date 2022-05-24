import { Component, OnInit } from '@angular/core';
import {VuelosService} from "src/app/aerolinea/vuelos.service"
import { Vuelos } from '../vuelos';

@Component({
  selector: 'app-vuelos',
  templateUrl: './vuelos.component.html',
  styleUrls: ['./vuelos.component.sass'],
  providers : [
    VuelosService
  ]
})
export class VuelosComponent implements OnInit {
  vuelos= [];
  vuelo : Vuelos={NumeroVuelo : 0, Origen : "", Destino : "", Fecha : "", Horario : ""};
  constructor(private vuelosService : VuelosService) { }

  ngOnInit(): void {
    this.vuelosService.getVuelos().subscribe(data=>{
      this.vuelos = data
    });
  }

  // Registrar(): void{
  //   this.vuelosService.registrarVuelo(this.vuelo);
  // }

  RegistrarVuelos(): void{
    let vregistrar = this.vuelo;
    this.vuelosService.registraVuelo(vregistrar).subscribe(
      vregistrar=>{
        console.log(vregistrar);
      }
    );
    this.vuelos.push(vregistrar);  }
}