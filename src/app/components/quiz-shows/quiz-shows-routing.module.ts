import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizShowsComponent } from './quiz-shows.component';

const routes: Routes = [
  { path: '', component: QuizShowsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizShowsRoutingModule { }
