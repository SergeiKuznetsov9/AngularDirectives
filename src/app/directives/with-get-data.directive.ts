import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appWithGetData]'
})
export class WithGetDataDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  // при помощи этого декоратора получим значение атрибута с названием appWithGetData, т.е. с названием самой диррективы
  // используется сеттер реализуем какую-то логику
  @Input('appWithGetData') set anyName(color: string) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', color)
  }

}
