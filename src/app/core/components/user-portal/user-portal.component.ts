import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Paths } from '@app/models/shared/global.models';
import { PortalType } from '@app/models/core.model';
import { AuthService } from '@app/services/auth/auth.service';
import { ButtonComponent } from '@app/shared/components/button/button.component';

@Component({
  selector: 'app-user-portal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './user-portal.component.html',
  styleUrls: ['./user-portal.component.scss']
})
export class UserPortalComponent implements OnInit {
  constructor(private activeRoute: ActivatedRoute, private authSVC: AuthService) {}

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    username: new FormControl('')
  });

  Paths = Paths;
  user$ = this.authSVC.user$

  ngOnInit(): void {
    this.path;
    this.authSVC.check();
      }

  get path() {
    const [url] = this.activeRoute.snapshot.url;
    return url.path;
  }

  get currentForm(): PortalType {
    if(this.path === Paths.SIGN_IN) {
      return 'Login'
    }
    return 'Register';
  }

  registerUser(){
    console.log(`%c INFO `, `background: purple; color: white;`, this.form.value.email, this.form.value.password, 'registerUser')
    this.authSVC.register(this.form.value.email, this.form.value.password);
  }

  signInUser(){
    console.log(`%c INFO `, `background: purple; color: white;`, this.form.value.email, this.form.value.password, 'signInUser')
    this.authSVC.signIn(this.form.value.email, this.form.value.password)
  }


}
