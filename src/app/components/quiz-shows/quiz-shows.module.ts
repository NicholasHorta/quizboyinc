import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizShowsRoutingModule } from './quiz-shows-routing.module';
import { QuizShowsComponent } from './quiz-shows.component';
import { QuizCollectionsComponent } from './quiz-collections/quiz-collections.component';
import { PresentAsTitlePipe } from '@app/shared/pipes/present-as-title.pipe';
import { ButtonComponent } from '@app/shared/components/button/button.component';



@NgModule({
  declarations: [
    QuizShowsComponent,
    QuizCollectionsComponent,
  ],
  imports: [
    CommonModule,
    QuizShowsRoutingModule,
    PresentAsTitlePipe,
    ButtonComponent
  ]
})
export class QuizShowsModule { }
