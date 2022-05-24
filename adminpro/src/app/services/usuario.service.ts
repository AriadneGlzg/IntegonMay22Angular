import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import {Usuario} from 'src/app/shared/usuario'


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http : HttpClient) { }
  _url = 'http://localhost:3005/usuarios';

  getUsuarios(): Observable<any[]>{
    return this.http.get<any[]>('http://localhost:3005/usuarios');
  }

  registraUsuario(user: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this._url, user);
  }



}
