import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyDelay]'
})
export class MyDelayDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {}

  @Input('appMyDelay') set delayTime(time: number) {

    console.log(this.templateRef)

    setTimeout(() => {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      
    }, time);
  }

}
