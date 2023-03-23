import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMouseEnterEvent]'
})
export class MouseEnterEventDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  // декоратор позволяет слушать указанное аргументом событие у элемента, на который повешана дирректива 
  @HostListener('mouseenter') on() {
    this.changeColor('red', 'bold')
  }

  @HostListener('mouseleave') of() {
    this.changeColor(null, null)
  }

  private changeColor(color: string | null, weight: string | null) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', color)
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-weight', weight)
  }

}
