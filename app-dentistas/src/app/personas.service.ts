import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Persona } from './persona';

@Injectable({ // el decorador para un servicio se hace con Injectable
  providedIn: 'root'
})
export class PersonasService {
//aqui podemos agregar una funcion metodo u operacion para jalar los datos
constructor(private http:HttpClient) { }
  // getPersonas():any{

  //   // //request$ todo eso es un objeto de tipo observable, en el se hace todo el request del GET en el server
  //   // const requestGETPersonas = new Observable(observer => { //esa const se llamaba request$ pero le cambie el nombre
  //   //   const request = new XMLHttpRequest();
  //   //   const url = "http://localhost:3005/personas";
  //   //   request.addEventListener("load", () => {
  //   //   if (request.readyState === 4 && request.status === 200) {
  //   //   observer.next(JSON.parse(request.responseText));
  //   //   observer.complete();
  //   //   } else {
  //   //   observer.error('An error has occured');
  //   //   }
  //   //   });
  //   //   request.open("GET", url);
  //   //   request.send();
  //   // });
  //   // return requestGETPersonas; // request$ se puede llamar como yo quiera en realidad

  // }
  getPersonas(): Observable<any[]>{ //tambien funciona con Personas en lugar de any
    return this.http.get<any[]>('http://localhost:3005/personas');
  }
}
