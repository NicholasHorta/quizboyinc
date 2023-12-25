import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  public isModalOpen = false

  constructor(private router: Router) {}

  modal = {
    close: () => {
      this.isModalOpen = false;
    },
    navigateTo: (param: string) => {
      this.isModalOpen = false;
      this.router.navigate([`/${param}`]);
    }
  };
}
