import { Component, Input, OnInit } from '@angular/core';
import { Achievement } from '@app/models/auth.models';

@Component({
  selector: 'bs-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent implements OnInit {
  @Input() achievements: Achievement[];

  ngOnInit(): void {
    console.log(this.achievements);
  }
}
