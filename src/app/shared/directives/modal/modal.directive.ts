import { Directive, DoCheck, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';

class ModalExtension {
  constructor(private router: any) { }
  public closeModal = false;
  methods = {
    close: () => {
      this.closeModal = true;
    },
    navigateTo: (prop: any) => {
      this.closeModal = true;
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
  private modalExtension = new ModalExtension(this.router);

  ngOnInit(): void {
    if (this.bsModal) {
      this.viewContainerRef.createEmbeddedView(this.templateRef, this.modalExtension);
    } else {
      this.viewContainerRef.clear();
    }
  }

  ngDoCheck(): void {
    console.log(`%c RUN `, `background: #f77528; color: black;`, this.modalExtension.closeModal)
    if (this.modalExtension.closeModal) {
      this.viewContainerRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef, private router: Router) { }

}
