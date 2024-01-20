import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { userGuard } from './shared/guards/user.guard';
import { Paths } from './models/shared/global.models';

const routes: Routes = [
  { path: Paths.EMPTY, redirectTo: Paths.HOME, pathMatch: 'full' },
  { path: Paths.AUTH, loadChildren: () => import('./core/core.module').then(m => m.CoreModule) },
  {
    path: Paths.STATIC,
    loadChildren: () => import('./static/static.module').then(m => m.StaticModule)
  },
  {
    path: Paths.PROFILE,
    loadChildren: () => import('./components/profile/profile.module').then(m => m.ProfileModule),
    canActivate: [userGuard()]
  },
  {
    path: Paths.HOME,
    loadChildren: () =>
      import('./components/quiz-shows/quiz-shows.module').then(m => m.QuizShowsModule)
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule],
  providers: []
})
export class QuizRootRoutingModule {}
