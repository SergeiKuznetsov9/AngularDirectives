import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appButtonClickingStyle]'
})
export class ButtonClickingStyleDirective {

  constructor() { }

// Этим мы привязываем наличие класса pressed у элемента значению переменной isClicked, которое по умолчанию является false
  @HostBinding('class.pressed') isClicked = false



  // По нажатию/отпусканию значение isClicked меняется
  @HostListener('mousedown') onMouseDown() {
    this.isClicked = !this.isClicked
  }
  
  @HostListener('mouseup') onMouseUp() {
    this.isClicked = !this.isClicked
  }
}
