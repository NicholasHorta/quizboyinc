import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GetParam } from '@app/models/shared/global.models';
import { ProfileService } from '@app/services/profile/profile.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'bs-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {
  @Input() username: GetParam;
  isModalOpen$: Observable<boolean>

  form: FormGroup = new FormGroup({
    username: new FormControl<string>('', [Validators.required, Validators.minLength(3)])
  });

  constructor(
    private profileSVC: ProfileService
  ) {}

  ngOnInit(): void {
    this.form.patchValue({ username: this.username });
  }

  onSubmit() {
    this.profileSVC.updateUsername(this.form.value.username);
  }

  warnUserOfDeleteConsequences(): void {

    this.isModalOpen$ = of(true);
    this.isModalOpen$.subscribe((isOpen) => {
      console.log(`%c RES `, `background: cyan; color: black;`, isOpen)
    })
  }
}
