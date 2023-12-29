import { Directive, DoCheck, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { Paths } from '@app/models/shared/global.models';
import { UserService } from '@app/services/auth/user.service';
import { take } from 'rxjs';

class ModalExtension {
  constructor(private router: Router, private userSVC: UserService) {}
  public isModalOpen = true;
  modal = {
    close: () => {
      this.isModalOpen = false;
    },
    navigateTo: (prop: any) => {
      this.router.navigate([`/${prop}`]);
    },
    confirmDeleteUser: () => {
      this.userSVC.deleteUserProfile$().pipe(take(1)).subscribe(() => {
        this.modal.navigateTo(Paths.EMPTY);
      });
    }
  };
}
@Directive({
  selector: '[bsModal]',
  standalone: true
})
export class ModalDirective implements OnInit, DoCheck {
  @Input() bsModal: boolean;

  modalExtension = new ModalExtension(this.router, this.userSVC);

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
    private userSVC: UserService
  ) {}
}
