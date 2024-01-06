import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { UserService } from '@app/services/auth/user.service';
import { Observable } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'bs-reset-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent, MatIconModule],
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private userSVC: UserService) { }

  form: FormGroup = new FormGroup({
    email: new FormControl<string>('', [Validators.required, Validators.email]),
  });
  error$: Observable<string>;

  ngOnInit(): void {
    this.error$ = this.userSVC.error$;
  }

  requestResetPassword() {
    this.userSVC.resetPassword(this.form.value.email)
  }

}
