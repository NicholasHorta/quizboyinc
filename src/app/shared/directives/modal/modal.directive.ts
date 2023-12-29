import { Directive, DoCheck, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { ModalService } from '@app/shared/services/modal.service';

@Directive({
  selector: '[bsModal]',
  standalone: true
})
export class ModalDirective implements OnInit, DoCheck {
  @Input() bsModal: boolean;

  ngOnInit(): void {
    this.modalSVC.isModalOpen.next(this.bsModal);
    this.viewContainerRef.createEmbeddedView(this.templateRef, this.modalSVC);
  }

  ngDoCheck(): void {
    this.modalSVC.isModalOpen$
      .subscribe(modalState => {
        this.bsModal = modalState;
        if (!this.bsModal) {
          this.viewContainerRef.clear();
        }
      })
      .unsubscribe();
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private modalSVC: ModalService
  ) {}
}
