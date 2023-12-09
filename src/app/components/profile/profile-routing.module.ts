import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { Paths } from '@app/models/shared/global.models';

const routes: Routes = [
  {
    path: Paths.EMPTY,
    component: ProfileComponent
  },
  {
    path: Paths.ACHIEVEMENTS,
    component: AchievementsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {}
