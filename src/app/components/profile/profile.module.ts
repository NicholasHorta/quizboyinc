import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { AchievementsComponent } from './achievements/achievements.component';

@NgModule({
  declarations: [
    ProfileComponent,
    AchievementsComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})

export class ProfileModule { }
