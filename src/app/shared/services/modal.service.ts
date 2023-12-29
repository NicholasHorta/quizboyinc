import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  isModalOpen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isModalOpen$ = this.isModalOpen.asObservable();

  constructor(private router: Router) {}

  modal = {
    close: () => {
      this.isModalOpen.next(false);
    },

    navigateTo: (prop: string) => {
      this.router.navigate([`/${prop}`]);
    }
  };
}
