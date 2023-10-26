import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[disableRightClick]',
})
export class DisableRightClickDirective {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.addEventListener(
      'contextmenu',
      (event: any) => {
        event.preventDefault();
      }
    );
  }
}
