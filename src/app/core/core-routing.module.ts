import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPortalComponent } from './components/user-portal/user-portal.component';

const routes: Routes = [
  { path: 'sign-in', component: UserPortalComponent },
  { path: 'register', component: UserPortalComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {}
