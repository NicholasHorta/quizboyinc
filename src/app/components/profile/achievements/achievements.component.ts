import { Component, Input, OnInit } from '@angular/core';
import { Achievement } from '@app/models/auth.models';
import { Paths } from '@app/models/shared/global.models';

@Component({
  selector: 'bs-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent implements OnInit {
  @Input() achievements: Achievement[];
  Paths = Paths;
  ngOnInit(): void {
    console.log(this.achievements);
  }
}
