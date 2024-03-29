import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { PresentAsTitlePipe } from '@app/shared/pipes/present-as-title.pipe';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { DeleteNotificationComponent } from '../../modals/delete-notification/delete-notification.component';
import { MatIconModule } from '@angular/material/icon';
import { LoaderComponent } from '@app/shared/components/loader/loader.component';

@NgModule({
  declarations: [
    ProfileComponent,
    AchievementsComponent,
    ProfileEditComponent
  ],
  imports: [
    CommonModule,
    PresentAsTitlePipe,
    ProfileRoutingModule,
    ReactiveFormsModule,
    ButtonComponent,
    DeleteNotificationComponent,
    MatIconModule,
    LoaderComponent
  ]
})

export class ProfileModule { }
