import { Directive, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[appInnerText]'
})
export class InnerTextDirective {

  textToInsert: string;
  constructor(private element: ElementRef, private renderer: Renderer) {
  }

  @Input() set addText(message) {
    this.element.nativeElement.innerHTML = message;
    this.renderer.setElementStyle(this.element.nativeElement, 'color', 'red');
  }

}
