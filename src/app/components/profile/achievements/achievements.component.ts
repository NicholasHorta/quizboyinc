import { Component, Input } from '@angular/core';
import { Achievement } from '@app/models/auth.models';
import { Paths } from '@app/models/shared/global.models';

@Component({
  selector: 'bs-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent {
  @Input() achievements: Achievement[];
  Paths = Paths;
}
