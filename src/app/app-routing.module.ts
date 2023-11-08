import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'info', loadChildren: () => import('./static/static.module').then(m => m.StaticModule)},
  {path: 'profile', loadChildren: () => import('./components/profile/profile.module').then(m => m.ProfileModule)},
  { path: '**',  component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
