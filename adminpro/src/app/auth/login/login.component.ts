import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import {Usuario} from 'src/app/shared/usuario'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usuarioService : UsuarioService, private route : Router) { }
  email:string;
  contrasena:string;
  usuarios= [];
  ngOnInit(): void {
  }
  logIn() : void{
    this.usuarioService.getUsuarios().subscribe(data=>{
      this.usuarios = data['usuarios'];
    });

    console.log(this.usuarios);
    console.log(this.email);
    console.log(this.contrasena);

    let ausuario = this.usuarios
    let user = ausuario.find(u => u.email===this.email && u.password===this.contrasena);

    this.usuarios.forEach
    if(user === undefined){
      alert("El usuario o la contraseña son incorrectos");
    }
    else{
      this.route.navigate(['dashboard']);
    }
  }

}
