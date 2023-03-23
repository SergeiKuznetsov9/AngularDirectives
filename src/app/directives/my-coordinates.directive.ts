import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyCoordinates]'
})
export class MyCoordinatesDirective {


  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }


  // функция, предваренная декораторм HostListener получит объект соответсвующего события
  @HostListener('mousemove', ['$event']) onMouseMove(e: MouseEvent) {
    this.elementRef.nativeElement.innerHTML = `X: ${e.offsetX} | Y:${e.offsetY}`
  }

}
