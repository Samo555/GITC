import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTrim]'
})
export class TrimDirective {

  constructor(public el: ElementRef) { }

  @HostListener('input') trim() {
    this.el.nativeElement.value = this.el.nativeElement.value.trimLeft();
    console.log(this.el.nativeElement.value);
  }

}
