import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor() { }

  @HostBinding("style.backgroundColor")
  bgColor = "red"

  @HostListener("mouseenter")
  changeFontSize(){
    console.log("Mouse Enter")
  }

  @HostListener("mouseleave")
  resetFontSize(){
    console.log("Mouse Leave")
  }

}
