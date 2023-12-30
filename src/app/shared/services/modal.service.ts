import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Paths } from '@app/models/shared/global.models';
import { UserService } from '@app/services/auth/user.service';
import { BehaviorSubject, first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private isModalOpen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isModalOpen$ = this.isModalOpen.asObservable();

  constructor(private router: Router, private userSVC: UserService) {}

  setModalState(state: boolean): void {
    this.isModalOpen.next(state);
  }


  modal = {
    close: () => {
      this.isModalOpen.next(false);
    },

    navigateTo: (prop: string) => {
      this.router.navigate([`/${prop}`]);
    },

    confirmDeleteUser: () => {
      this.userSVC.deleteUserProfile$().pipe(first()).subscribe();
      this.router.navigate([Paths.EMPTY]);
    }
  };
}
