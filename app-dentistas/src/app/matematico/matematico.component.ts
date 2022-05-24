import { Component, EventEmitter, Input, OnInit, Output, OnChanges} from '@angular/core';

@Component({
  selector: 'app-matematico',
  templateUrl: './matematico.component.html',
  styleUrls: ['./matematico.component.sass']
})
export class MatematicoComponent implements OnInit {
  public resultado:number;
  @Input() num1:number;
  @Input() num2:number;
  @Input() operacion:string;
  @Output() buttonClicked = new EventEmitter<boolean>();
  //@Output() buttonClicked = new EventEmitter();
  constructor() { }
  ngOnInit(): void {
  }

  ngOnChanges(changes){ // el ngOnchanges es algo ya propio del angular, Onchanges tambien se puede poner en el import
    const n2 = changes['num2'];
    const n1 = changes ['num1']; // 'propiedad' que se quiere monitorear con el changes
    const oldvalue = n1.previousValue; //previosValue y currentValue son propias de angular
    const newvalue1 = n1.currentValue;

    if(newvalue1<0){
      this.num1 = 0;
      console.log(`Valor inicial ${oldvalue}. Numero 1 cambio de ${newvalue1} a ${this.num1}`);
    }
    if(n2.currentValue<0){
      this.num2 = 0;
      console.log(`Numero 2 cambio de ${n2.currentValue} a ${this.num2}`);
    }


    this.calculo();

  }

  calculo() : void {
    switch (this.operacion) {
      case "+":
        this.resultado = this.num1 -(-this.num2);
        break;
      case "-":
        this.resultado = this.num1-this.num2;
        break;
      case "*":
        this.resultado = this.num1*this.num2;
          break;
      case "/":
        this.resultado = this.num1/this.num2;
        break;
      default:
        break;
    }
  }
  emitirEvento(){
    this.calculo();
    this.buttonClicked.emit(false);
  }


}
