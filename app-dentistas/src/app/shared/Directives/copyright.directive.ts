import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({ //decorador para hacer la clase una directiva
  selector: '[appCopyright]'
})
export class CopyrightDirective {

  constructor(el: ElementRef, renderer: Renderer2) {
    renderer.addClass(el.nativeElement, 'copyright');
    renderer.setProperty(
    el.nativeElement,
    'textContent',
    `Copyright ©${new Date().getFullYear()} All Rights
    Reserved.`
    );
  }

}
