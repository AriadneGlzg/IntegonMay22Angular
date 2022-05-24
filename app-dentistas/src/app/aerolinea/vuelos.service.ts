import { Injectable } from '@angular/core';
import {Vuelos } from './vuelos';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class VuelosService {
   vuelosHardCode: Vuelos[] = [
    {  NumeroVuelo : 1, Origen : "Morelia", Destino : "Cd. Mexico", Fecha : "20/05/2022", Horario : "06:00 A.M"},
    {  NumeroVuelo : 30, Origen : "Cd.Mexico", Destino : "Seul", Fecha : "02/12/2022", Horario : "08:00 P.M"},
    {  NumeroVuelo : 50, Origen : "Morelia", Destino : "Veracruz", Fecha : "03/11/2022", Horario : "11:15 A.M"},
    {  NumeroVuelo : 11, Origen : "Queretaro", Destino : "Tijuana", Fecha : "11/09/2022", Horario : "06:30 P.M"}
    ];

  constructor(private http: HttpClient) { }
  _url = 'http://localhost:3005/vuelos';
  // getVuelos():Vuelos[]{
  //   console.log(this.vuelosHardCode[0]);
  //   return this.vuelosHardCode;
  // }
  // registrarVuelo(vuelo:Vuelos){
  //   vuelo;
  //   this.vuelosHardCode.push(vuelo);
  // }

  getVuelos(): Observable<any[]>{ //tambien funciona con Personas en lugar de any
    //return this.http.get<any[]>('http://localhost:3005/vuelos');
    return this.http.get<any[]>('http://localhost:3005/vuelos').pipe(
      catchError((error:HttpErrorResponse)=>{
        console.log(`Ocurrio un error ${error}`);
        return throwError(error);
      })
    );
  }
  // registrarVuelo():Observable<any[]>{
  //   return this.http.post<any[]>('http://localhost:3005/vuelos');
  // }

  registraVuelo(vue: Vuelos): Observable<Vuelos>{
    return this.http.post<Vuelos>(this._url, vue);
  }



}


