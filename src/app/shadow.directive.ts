import {
  Directive,
  HostBinding,
  ElementRef,
  HostListener,
} from "@angular/core";

@Directive({
  selector: "[appShadow]",
})
export class ShadowDirective {
  @HostBinding("class.box-shadow") myCondition: boolean;

  @HostListener("mouseenter") mouseover() {
    this.myCondition = true;
  }

  @HostListener("mouseleave") mouseout() {
    this.myCondition = false;
  }
}
