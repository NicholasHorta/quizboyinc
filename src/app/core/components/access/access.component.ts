import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'bs-access',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.scss']
})
export class AccessComponent {

  constructor(private router: Router) { }

  accessEvent(route: string) {
    this.router.navigate(['login', route]);
  }

  clearLS(){
    localStorage.clear();
  }

  seeLS(){
    console.log(`%c localStorage `, `background: yellow; color: black;`, localStorage);
  }

}
