import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { Router } from '@angular/router';
import { UserService } from '@app/services/auth/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'bs-access',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.scss'],
})
export class AccessComponent {

  constructor(private router: Router, private userSVC: UserService) { }


  get user$(): Observable<any>{
    return this.userSVC.user$;
  }

  accessEvent(route: string): void {
    this.router.navigate(['auth', route]);
  }

  clearLS(){
    localStorage.clear();
  }

  seeLS(){
    console.log(`%c localStorage `, `background: yellow; color: black;`, localStorage);
  }

  checkUser(){
    this.userSVC.checkIn();
  }

  logout(): void {
    this.userSVC.logout();
  }
}
