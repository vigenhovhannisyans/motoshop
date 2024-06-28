import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[motScroll]',
  standalone: true
})
export class ScrollDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollPosition >= 100) {
      this.renderer.addClass(this.el.nativeElement, 'scrolled');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'scrolled');
    }
  }
}
