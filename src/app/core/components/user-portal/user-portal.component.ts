import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Paths } from '@app/models/shared/global.models';
import { PortalType } from '@app/models/core.model';
import { UserService } from '@app/services/auth/user.service';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-portal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent, RouterModule],
  templateUrl: './user-portal.component.html',
  styleUrls: ['./user-portal.component.scss']
})
export class UserPortalComponent implements OnInit {
  constructor(private activeRoute: ActivatedRoute, private userSVC: UserService) {}

  form: FormGroup = new FormGroup({
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', Validators.required),
    username: new FormControl<string>('')
  });

  Paths = Paths;
  user$ = this.userSVC.user$;
  authError$: Observable<string>;

  ngOnInit(): void {
    this.path;
    this.authError$ = this.userSVC.authError$;
  }

  get path() {
    const [url] = this.activeRoute.snapshot.url;
    return url.path;
  }

  get currentForm(): PortalType {
    if (this.path === Paths.SIGN_IN) {
      return 'Sign in';
    }
    return 'Register';
  }

  registerUser() {
    this.userSVC.register(
      this.form.value.email,
      this.form.value.password,
      this.form.value.username
    );
  }

  signInUser() {
    this.userSVC.signIn(this.form.value.email, this.form.value.password);
  }
}
