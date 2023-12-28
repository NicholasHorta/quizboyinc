import { Directive, DoCheck, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';



class ModalExtension {
  constructor(private router: Router) { }
  public isModalOpen = true
  modal = {
    close: () => {
      this.isModalOpen = false;
    },
    navigateTo: (prop: any) => {
      this.router.navigate([`/${prop}`]);
    }
  }
}
@Directive({
  selector: '[bsModal]',
  standalone: true,
})
export class ModalDirective implements OnInit, DoCheck {
  @Input() bsModal: boolean;

  modalExtension = new ModalExtension(this.router);

  ngOnInit(): void {
    if (this.bsModal) {
      this.viewContainerRef.createEmbeddedView(this.templateRef, this.modalExtension);
    }
  }

  ngDoCheck(): void {
    if (!this.modalExtension.isModalOpen) {
      this.viewContainerRef.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private router: Router,
  ) {}
}
