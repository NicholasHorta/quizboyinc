import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizShowsRoutingModule } from './quiz-shows-routing.module';
import { QuizShowsComponent } from './quiz-shows.component';
import { QuizCollectionsComponent } from './quiz-collections/quiz-collections.component';



@NgModule({
  declarations: [
    QuizShowsComponent,
    QuizCollectionsComponent
  ],
  imports: [
    CommonModule,
    QuizShowsRoutingModule
  ]
})
export class QuizShowsModule { }
