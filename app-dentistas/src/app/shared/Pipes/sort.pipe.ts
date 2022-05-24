import { Pipe, PipeTransform } from '@angular/core';
import {Persona} from '../../persona' //importamos la interfaz

@Pipe({ //decorador de la clase SortPipe
  name: 'sort'
})

export class SortPipe implements PipeTransform { //implementa la interfaz de angular PipeTransform

  transform(value: Persona[], args: string, args1: string): Persona[] {
    if(args1 === 'desc'){
      if(value){
        return value.sort((a:Persona, b:Persona)=>{ //va a ordenar deacuerdo a un valor
          if(a[args]<b[args]){
             return 1;
          }else if(b[args]<a[args]){
             return -1;
          }
          return 0;
        });
      }
    }

    else{
      if(value){
        return value.sort((a:Persona, b:Persona)=>{ //va a ordenar deacuerdo a un valor
          if(a[args]<b[args]){
             return -1;
          }else if(b[args]<a[args]){
             return 1;
          }
          return 0;
        });
      }
    }
   }
 }
