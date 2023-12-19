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

  userData$: Observable<UserData>;
  isAchievementsOpen = false;

  ngOnInit(): void {
    this.userData$ = this.profileSVC.userData$;
  }

  toggleAchievements(): void {
    this.isAchievementsOpen = !this.isAchievementsOpen;
  }

}
