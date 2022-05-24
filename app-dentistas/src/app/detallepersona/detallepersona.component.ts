import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detallepersona',
  templateUrl: './detallepersona.component.html',
  styleUrls: ['./detallepersona.component.sass']
})
export class DetallepersonaComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }
  clavePersona : number =0;
  nombrePersona:string;

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.clavePersona = params['num'];
      this.nombrePersona = params['gatitos'];
    });
  }

}
