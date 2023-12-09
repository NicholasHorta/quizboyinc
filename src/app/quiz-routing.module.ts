import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { userGuard } from './shared/guards/user.guard';

const routes: Routes = [
  { path: '', redirectTo: 'shows', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) },
  { path: 'info', loadChildren: () => import('./static/static.module').then(m => m.StaticModule) },
  {
    path: 'profile',
    loadChildren: () => import('./components/profile/profile.module').then(m => m.ProfileModule),
    canActivate: [userGuard()]
  },
  {
    path: 'shows',
    loadChildren: () =>
      import('./components/quiz-shows/quiz-shows.module').then(m => m.QuizShowsModule)
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule {}
