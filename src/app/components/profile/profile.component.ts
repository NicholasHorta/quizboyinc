import { Component, OnInit } from '@angular/core';
import { UserData } from '@app/models/auth.models';
import { ProfileService } from '@app/services/profile/profile.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'bs-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private profileSVC: ProfileService) { }

  currentUser$: Observable<UserData>;

  ngOnInit(): void {
    this.currentUser$ = this.profileSVC.currentUser$;
  }

}
