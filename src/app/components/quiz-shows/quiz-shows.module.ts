import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizShowsRoutingModule } from './quiz-shows-routing.module';
import { QuizShowsComponent } from './quiz-shows.component';
import { QuizCollectionsComponent } from './quiz-collections/quiz-collections.component';
import { PresentAsTitlePipe } from '@app/shared/pipes/present-as-title.pipe';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';
import { QuizTimerComponent } from './components/quiz-timer/quiz-timer.component';
import { ToastComponent } from '@app/shared/components/toast/toast.component';
import { ToastDirective } from '@app/shared/directives/toast/toast.directive';



@NgModule({
  declarations: [
    QuizShowsComponent,
    QuizCollectionsComponent,
    QuizQuestionComponent
  ],
  imports: [
    CommonModule,
    QuizShowsRoutingModule,
    PresentAsTitlePipe,
    ButtonComponent,
    QuizTimerComponent,
    ToastComponent,
    ToastDirective
  ]
})
export class QuizShowsModule { }
