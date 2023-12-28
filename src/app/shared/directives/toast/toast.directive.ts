import { Component, Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[bsToast]',
  standalone: true
})
export class ToastDirective implements OnInit {

  @Input() bsToast: boolean;

  ngOnInit(): void {
    if (this.bsToast) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

  constructor(private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<Component>) { }
}
