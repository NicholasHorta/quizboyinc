import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { PresentAsTitlePipe } from '@app/shared/pipes/present-as-title.pipe';

@NgModule({
  declarations: [
    ProfileComponent,
    AchievementsComponent
  ],
  imports: [
    CommonModule,
    PresentAsTitlePipe,
  ]
})

export class ProfileModule { }
