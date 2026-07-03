import { Directive, ElementRef, inject } from '@angular/core';

// On CMD run - 
// ng generate directive directives/highlight

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  private el = inject(ElementRef);
  constructor() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }
}