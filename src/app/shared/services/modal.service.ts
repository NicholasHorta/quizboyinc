import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  public isModalClosed = false;

  constructor(private router: Router) {}

  modal = {
    close: () => {
      this.isModalClosed = true;
    },
    navigateTo: (param: string) => {
      this.isModalClosed = true;
      this.router.navigate([`/${param}`]);
    }
  };
}
