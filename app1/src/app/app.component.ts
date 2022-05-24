import { Component } from '@angular/core';
//esta unidad es el componente
@Component({
  selector: 'app-hola-mundo', //nombre del compomnente tag
  templateUrl: './app.component.html', //s cual es el html del compoenente, donde esta el html en el proyecto
  styleUrls: ['./app.component.css'] //estilo que tiene el html, cual es el estilo css  "./" eso significa en el mismo folder donde esta este archivo
})
export class AppComponent {
  title = 'app1';
  developer = 'paola♥'; // asi como esta es del tipo public
  demoIntellisense = 'demo'; // si le ponemos private pues ya seria private XD
}
