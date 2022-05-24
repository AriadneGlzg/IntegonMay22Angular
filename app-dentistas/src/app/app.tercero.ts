import {Component} from '@angular/core';

@Component({
  selector: 'tercero',
  template: `<div>
  <p>{{Saludo}}, este es mi componente numero {{numComponente}}, el nombre del componente es "{{Nombre}}"</p>
</div>`
})

export class Tercero {
  Nombre = 'Tercero';
  Saludo = "Buen dia";
  numComponente = 2;
}

@Component({
  selector: 'cuarto',
  template: `<p>#Componente: {{numComponente}}, Nombre:"{{Nombre}}"</p>`
})

export class Cuarto {
  Nombre = 'Cuarto';
  numComponente = 3;
}
