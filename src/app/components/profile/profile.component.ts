import { Component, OnInit } from '@angular/core';
import { UserData } from '@app/models/auth.models';
import { Paths, ViewToggle } from '@app/models/shared/global.models';
import { ProfileService } from '@app/services/profile/profile.service';
import { ViewportService } from '@app/shared/services/viewport.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'bs-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  constructor(private profileSVC: ProfileService, private viewportSVC: ViewportService) {}

  userData$: Observable<UserData>;
  isMobile: boolean;
  Paths = Paths;

  ngOnInit(): void {
    this.userData$ = this.profileSVC.userData$;
    this.isMobile = this.viewportSVC.getViewportSize() > ViewToggle.SM ? false : true;
  }
}
