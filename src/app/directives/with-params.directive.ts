import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appWithParams]'
})
export class WithParamsDirective implements OnInit {
  @Input() message!: string;
  @Input() counter!: number;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {

    for (let i=0; i < this.counter; i++) {
      const div = this.renderer.createElement('div');
      const message = this.renderer.createText(this.message);

      this.renderer.appendChild(div, message);
      this.renderer.appendChild(this.elementRef.nativeElement, div)
    }

    
  }

}
