import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  // По данному селектору дирректива импортится в модуль
  selector: '[appMyColor]'
})
export class MyColorDirective {

  // ElementRef - внутри диррективы указывает на элемент, которому она применена.
  // Это абстракция. Она делает 

  // Renderer2 - используется для манипуляций с абстракцией ElementRef, похож на document
  // его методы: https://angular.io/api/core/Renderer2

  // указанное выше инжектим
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(elementRef.nativeElement, 'color', 'red')
    renderer.setStyle(elementRef.nativeElement, 'font-weight', 'bold')
  }

}
