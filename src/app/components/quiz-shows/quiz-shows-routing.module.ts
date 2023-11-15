import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizShowsComponent } from './quiz-shows.component';
import { QuizCollectionsComponent } from './quiz-collections/quiz-collections.component';

const routes: Routes = [
  { path: '', component: QuizShowsComponent },
  { path: ':show', component: QuizCollectionsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizShowsRoutingModule {}
