import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyDir]'
})
export class MyDirDirective {

  constructor(public el: ElementRef) { }

  @HostListener('mouseover') hover() {
    this.el.nativeElement.style.fontSize = '20px';
    this.el.nativeElement.style.color = 'red';
    this.el.nativeElement.style.transition = '0.5s';
  }

  @HostListener('mouseleave') onHover() {
    this.el.nativeElement.style.fontSize = 'initial';
    this.el.nativeElement.style.color = 'initial';
  }

}
