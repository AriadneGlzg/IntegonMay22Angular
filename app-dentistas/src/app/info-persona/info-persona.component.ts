import { Component, Input, OnInit, OnDestroy } from '@angular/core'; //ahi se agrego el Input para poder usar el decorador @Input
import { PersonasService } from 'src/app/personas.service'; //importamos el servicio
@Component({
  selector: 'app-info-persona',
  templateUrl: './info-persona.component.html',
  styleUrls: ['./info-persona.component.sass'],
  providers:[PersonasService]
})
export class InfoPersonaComponent implements OnInit {
  @Input()  nombre : string; //decorador de input
  @Input() apellido : string;
  public personas= [];
  constructor(private personaService : PersonasService) { }

  ngOnInit(): void {
    this.personaService.getPersonas().subscribe(data=>{
      this.personas = data["osa"];
    });
  }
  ngOnDestroy(): void{
    console.log("se destruyo el componente info-persona :(");
  }


}
