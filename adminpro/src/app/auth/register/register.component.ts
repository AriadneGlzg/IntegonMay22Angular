import { Component, OnInit } from '@angular/core';
import {Usuario} from 'src/app/shared/usuario'
import {UsuarioService} from 'src/app/services/usuario.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[UsuarioService]
})
export class RegisterComponent implements OnInit {
  rusuario : Usuario={nombre : "", email : "", password : ""};
  cpassword:string="";
  constructor(private usuarioService: UsuarioService, private route:Router) { }

  ngOnInit(): void {
  }

  RegistrarUsuario() : void{
    let uregistrar = this.rusuario;
    console.log(this.cpassword);
    let valido =false;

    if(uregistrar.nombre ===""){
      alert("Debes ingresar tu nombre");
    }
    else{
      if(uregistrar.email ===""){
        alert("Debes ingresar un email");
      }
      else{
        if(uregistrar.password ===""|| uregistrar.password.length < 8){
          alert("Debes ingresar una contrasena de almenos 8 caracteres");
        }
        else{
          if(this.cpassword ===""){
            alert("Debes confirmar tu contraseña");
          }
          else{
            if(uregistrar.password === this.cpassword){
              valido =true;
            }
            else{
              alert("Las contraseñas deben coincidir");
            }
          }
        }
      }
    }

    if(valido){
      this.usuarioService.registraUsuario(uregistrar).subscribe(
        uregistrar=>{
          console.log(uregistrar);
        }
      );
      this.route.navigate(['dashboard']);
    }

  }
}
