import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizShowsComponent } from './quiz-shows.component';
import { QuizCollectionsComponent } from './quiz-collections/quiz-collections.component';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';
import { Paths } from '@app/models/shared/global.models';

const routes: Routes = [
  { path: Paths.EMPTY, component: QuizShowsComponent },
  { path: ':id', component: QuizCollectionsComponent },
  { path: ':id/:season', component: QuizQuestionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizShowsRoutingModule {}
