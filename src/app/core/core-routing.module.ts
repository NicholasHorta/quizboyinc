import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPortalComponent } from './components/user-portal/user-portal.component';
import { Paths } from '@app/models/shared/global.models';
import { ResetPasswordComponent } from './components/user-portal/reset-password/reset-password.component';

const routes: Routes = [
  { path: Paths.EMPTY, redirectTo: Paths.SIGN_IN, pathMatch: 'full' },
  { path: Paths.SIGN_IN, component: UserPortalComponent },
  { path: Paths.REGISTER, component: UserPortalComponent },
  { path: Paths.RESET_PW, component: ResetPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {}
