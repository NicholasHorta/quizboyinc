import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[bsTooltip]',
  standalone: true
})
export class TooltipDirective {

  @Input() bsTooltip: string;

  @HostListener('mouseenter') onMouseEnter(): void {
    this.showTooltip();
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.hideTooltip();
  }

  showTooltip(): void {
    const tooltip = this.renderer.createElement('div');
    const text = this.renderer.createText(this.bsTooltip);
    this.renderer.addClass(tooltip, 'quiz-tooltip');
    this.renderer.appendChild(tooltip, text);
    this.renderer.appendChild(this.elemRef.nativeElement, tooltip);
  }

  hideTooltip(): void {
    const tooltip = this.elemRef.nativeElement.querySelector('div');
    this.renderer.removeChild(this.elemRef.nativeElement, tooltip);
  }

  constructor(private elemRef: ElementRef, private renderer: Renderer2) { }
}
