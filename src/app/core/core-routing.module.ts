import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPortalComponent } from './components/user-portal/user-portal.component';
import { Paths } from '@app/models/shared/global.models';

const routes: Routes = [
  { path: Paths.SIGN_IN, component: UserPortalComponent },
  { path: Paths.REGISTER, component: UserPortalComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {}
