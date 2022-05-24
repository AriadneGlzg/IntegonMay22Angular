import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.sass']
})
export class CounterComponent implements OnInit {
  Cuenta = 0;

  ngOnInit(): void {
  }
  c1():void{
    this.Cuenta ++;
  }
  c2():void{
    this.Cuenta --;
  }

}
