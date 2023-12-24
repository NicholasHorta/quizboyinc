import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(private router: Router) {}
  public closeModal = false;


  methods = {
    close: () => {
      this.closeModal = true;
    },
    navigateTo: (prop: any) => {
      this.closeModal = true;
      this.router.navigate([`/${prop}`]);
    }
  };
}
