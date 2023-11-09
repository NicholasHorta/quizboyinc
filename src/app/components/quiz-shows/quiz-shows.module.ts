import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizShowsRoutingModule } from './quiz-shows-routing.module';
import { QuizShowsComponent } from './quiz-shows.component';



@NgModule({
  declarations: [
    QuizShowsComponent
  ],
  imports: [
    CommonModule,
    QuizShowsRoutingModule
  ]
})
export class QuizShowsModule { }
