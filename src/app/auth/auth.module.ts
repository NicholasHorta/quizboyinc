import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessComponent } from './access/access.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { AchievementsComponent } from '../components/profile/achievements/achievements.component';



@NgModule({
  declarations: [AccessComponent, ProfileComponent, AchievementsComponent],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
