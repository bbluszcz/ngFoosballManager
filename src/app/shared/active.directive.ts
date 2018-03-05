import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appActive]'
})
export class ActiveDirective {
  @HostBinding('class.active') isActive = false;

  @HostListener('click') toggleActive() {
    this.isActive = !this.isActive;
  }

  constructor() { }

}
