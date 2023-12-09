import { Component, Input } from '@angular/core';
import { Achievements } from '@app/models/auth.models';

@Component({
  selector: 'bs-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent {
  @Input() achievements: Achievements[];
}
