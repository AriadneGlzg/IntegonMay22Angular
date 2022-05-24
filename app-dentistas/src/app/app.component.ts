import { Component } from '@angular/core'; //clase //puede que tenga que poner el OnInit ahi tambien para que jale
import { PersonasService } from './personas.service'; //importamos el servicio

@Component({ //decoradores de la clase
  selector: 'app-root',
  templateUrl:'./app.component.html',
  template: `
            <router-outlet></router-outlet>

            <div *appPermission="['admin', 'agent']">
              <h3>This area can be accessed only by admin o agent</h3>
            </div>
            <p>Propiedades de ComponentOne {{prop1}} {{prop2}} {{prop3}}</p><ejemplo></ejemplo>
            <button (click)="demo()">Demo</button>
            <app-info-persona [nombre]="'Ariadne Paola'" apellido="Gonzalez"></app-info-persona> <!-- metes una propiedad [nombre]="propiedad" si es [nombre]="'propiedad'" metes un string que dice propiedad-->
            <app-matematico #appMath1 num1=-10 num2=11 operacion="+" (buttonClicked)="onClick2($event)"></app-matematico>
            <app-matematico #appMath2 num1=15 num2=-8 operacion="+" (buttonClicked)="onClick2($event)"></app-matematico>
            <p>El valor de la propieedad resultado del componente es {{appMath2.resultado}}</p>
            <p>La operacion fue {{appMath1.num1}} {{appMath1.operacion}} {{appMath1.num2}} = {{appMath1.resultado}}</p>
            <p *ngIf="prop1=='prop1'; else noSeCumple">Se cumplio la condicion</p>
            <ng-template #noSeCumple>
              <p>No se cumplio la condicion</p>
            </ng-template>
            <app-vuelos></app-vuelos>
            <p appCopyright></p>
            <input type="text" appNumeric/>
            <app-demoutilerias></app-demoutilerias>

            <table>
            <tr>
              <td>Id/Indice</td>
              <td>Nombre</td>
              <td>Ciudad</td>
              <td>Ubicacion</td>
              <td>Moneda</td>
            </tr>
            <tr *ngFor="let persona of personas | sort:'modena' ; index as indice"> <!--<tr *ngFor="let persona of personas | sort:'modena' ; index as indice">-->
              <td><p>{{persona.id}}/{{indice | percent}}</p></td>
              <td><p>{{persona.nombre}}</p></td>
              <td><p>{{persona.ciudad | uppercase}}</p></td>
              <td [ngSwitch]="persona.ciudad">
                <p *ngSwitchCase="'Morelia'">Local</p>
                <p *ngSwitchCase="'Gatolandia'">Extraterrestre</p>
                <p *ngSwitchDefault>Foraneo</p>
              </td>
              <td><p>{{persona.moneda | currency}}</p></td>
            </tr>
          </table>
            <!-- <p>{{personas[0].ciudad | slice:0:5 | slice: 2}}</p> Morelia primero toma del 0 al 4 'Morel' de ahi reeinicia la cuenta y toma del
           2 en adelante 'rel'-->

           Dato: <input type="text" id="txDato" [(ngModel)]="dato"> {{dato}}


            `
  , //templateUrl: './app.component.html', // aqui en el template en lugar de templateurl podemos poner solo el contenido html asi tal caul con backticks// //template:`<div><div>♥{{ prop1 }}</div><div>♥{{ prop2 }}</div><div>♥{{ prop2 }}</div></div>`
  styleUrls: ['./app.component.sass'],
  providers: [ //aqui agrego providers para que me pueda usar al servicio providers
    PersonasService
  ]
})
export class ComponentOne { //imports OnInit puede que necesite poner eso si es que no jala
  title = 'app-dentistas';
  developer = 'Ariadne Paola';
  numApp = 3;
  descripcion='Mi tercera app en angular';
  prop1='prop1';
  prop3='prop3';
  prop2='prop2';
  dato:string="";
  public personas= [];
  //aqui estuvo originalmente el arreglo de personas
  // public personas = [
  //   {id:1, nombre:"Paola", ciudad: "Morelia", moneda: 15000},
  //   {id:2, nombre:"Ariadne", ciudad: "Guanajuato",moneda: 58000},
  //   {id:3, nombre:"Abel", ciudad: "Cd. Mexico",moneda: 40000},
  //   {id:4, nombre:"Jose", ciudad: "Morelia",moneda: 38000},
  //   {id:5, nombre:"Elenita", ciudad: "Gatolandia",moneda: 5000}
  // ];
  constructor(private personasService:PersonasService) { //aqui vamos ahora si a injectar la dependecia, es una referencia al dichoso servicio
  }

  ngOnInit(){
    //aqui justo cuando se inicie el componente, llamaos al servicio para que nos de las personas y lo guarde en personas
    // this.personasService.getPersonas() //this.personas = this.personasService.getPersonas(), se puede omitir el "this.personas =" y funciona
    //   .subscribe({
    //     next: ositos=>{ //eso era data pero puede ser cualquier cosa, en realidad por buena practica debe llamarse data
    //       this.personas =ositos.osa; // osa es con el nombre del paquete JSON que viene del server,
    //       //en la peticion GET para personas del server, response.status(200).json({osa:items}); el paquete json se llama osa,
    //       //por eso aqui se debe de llamar osa para que siga funcinando
    //     }
    //   });
    //   console.log(`Personas: ${this.personas}`);

    this.personasService.getPersonas().subscribe(ositos=>{ //otra vez esto puede tener cualquier nombre por buenas practicas se pone data pero aqui le puse ositos solo como demostracion
      this.personas = ositos["osa"]; // nuevamente le decimos que nos traiga el paquete "osa" que se llama osa porque en el server se llama osa
    });

  }
  demo():void{
    this.prop1 = "Modificado por el click handle";
  }

  onClick(){
    window.alert("se presiono el boton");
  }

  onClick2($event){
    if($event){
      window.alert("esta en true");
    }
    else{
      window.alert("esta en false");
    }

  }
}
