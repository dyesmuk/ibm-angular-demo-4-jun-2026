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



// import { Directive, ElementRef, inject } from '@angular/core';

// // On CMD run - 
// // ng generate directive directives/highlight

// @Directive({
//   selector: '[appHighlight]',
//   host: {
//     '(mouseenter)': 'onMouseEnter()',
//     '(mouseleave)': 'onMouseLeave()',
//   },
// })
// export class HighlightDirective {

//   private el = inject(ElementRef);

//   constructor() {
//     this.el.nativeElement.style.backgroundColor = 'yellow';
//   }

//   onMouseEnter() {
//     this.highlight('blue');
//   }
  
//   onMouseLeave() {
//     this.highlight('orange');
//   }
//   private highlight(color: string) {
//     this.el.nativeElement.style.backgroundColor = color;
//   }
// }