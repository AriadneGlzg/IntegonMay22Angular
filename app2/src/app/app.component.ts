import { Component } from '@angular/core'; //importar la clase component del angular/core en realidad eso es el modulo del componente el modulo es angular/core
// declarativa de angular para el compoenete
@Component({
  selector: 'app-root', //nombre del selector
  templateUrl: './app.component.html', // su html en donde esta
  styleUrls: ['./app.component.sass'] // los estilos (la hoja de estilos)en este caso es sass
})
export class AppComponent { //clase AppComponent que esta siendo exportada
  title = 'My second angular app♥';
  developer = 'Paola Gonzalez♥'; // estas son variables que se estan leyendo en el appcomponent html
}
