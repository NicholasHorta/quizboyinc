import { Directive, DoCheck, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { ModalService } from '@app/shared/services/modal.service';

@Directive({
  selector: '[bsModal]',
  standalone: true,
})
export class ModalDirective implements OnInit, DoCheck {
  @Input() bsModal: boolean;

  ngOnInit(): void {
    if (this.bsModal) {
      this.viewContainerRef.createEmbeddedView(this.templateRef, this.modalSVC);
    } else {
      this.viewContainerRef.clear();
    }
  }

  ngDoCheck(): void {
    if (this.modalSVC.isModalClosed) {
      this.viewContainerRef.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private modalSVC: ModalService
  ) {}
}
