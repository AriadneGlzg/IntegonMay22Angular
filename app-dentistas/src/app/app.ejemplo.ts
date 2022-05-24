import { Component} from '@angular/core'; //importamos la clase component


@Component({
  selector: 'ejemplo', //ahi en el template podria ser el templateURL para referenciar que el template esta en un archivitohtml, se pone la ruta de donde esta el html
  template: `<div>
                <h1>Componente</h1>
                <p>{{Saludo}}, este es mi componente numero {{numComponente}}, el nombre del componente es "{{Nombre}}"</p>
                <tercero></tercero>

            </div>`


})
//la clase ejemplo va a ser mi componenete, por eso arriba le ponemos el decorador
//para que la clase sea un componente le ponemos el decorador de arriba
export class Ejemplo{ // aqui decimos que la clase Ejemplo se puede exportar a otros archivos
  Nombre = 'ejemplo';
  Saludo = "Hola";
  numComponente = 1;
}
