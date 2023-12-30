import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetParam, Paths } from '@app/models/shared/global.models';
import { UserService } from '@app/services/auth/user.service';
import { ModalDirective } from '@app/shared/directives/modal/modal.directive';
import { Observable } from 'rxjs';

@Component({
  selector: 'bs-achievement-notification',
  standalone: true,
  imports: [ModalDirective, AsyncPipe, NgIf],
  templateUrl: './achievement-notification.component.html',
  styleUrls: ['./achievement-notification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AchievementNotificationComponent implements OnInit {
  title: GetParam;
  seasonParam: GetParam;
  isModalOpen$: Observable<boolean>
  path = Paths.PROFILE;

  constructor(private activatedRoute: ActivatedRoute, private userSVC: UserService) {}

  ngOnInit(): void {
    this.seasonParam = this.activatedRoute.snapshot.paramMap.get('season');
    this.title = this.activatedRoute.snapshot.queryParamMap.get('title');
    this.isModalOpen$ = this.userSVC
    .warnIfUserHasAchievements({ season: this.seasonParam, show: this.title });
  }
}

