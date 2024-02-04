import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Achievement } from '@app/models/auth.models';
import { Paths } from '@app/models/shared/global.models';

@Component({
  selector: 'bs-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent {
  @Input() achievements: Achievement[];
  @Input() isMobile = false;
  Paths = Paths;

  constructor(private router: Router) {}

  attemptRedoOfSelectedAchievement(id: string, season: string, title: string): void {
    this.router.navigate([Paths.HOME, id, season], { queryParams: { title } });
  }
}
