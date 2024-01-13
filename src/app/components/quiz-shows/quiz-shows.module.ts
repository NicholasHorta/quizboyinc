import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizShowsRoutingModule } from './quiz-shows-routing.module';
import { QuizShowsComponent } from './quiz-shows/quiz-shows.component';
import { QuizCollectionsComponent } from './quiz-collections/quiz-collections.component';
import { PresentAsTitlePipe } from '@app/shared/pipes/present-as-title.pipe';
import { ButtonComponent } from '@app/shared/components/button/button.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizTimerComponent } from './components/quiz-timer/quiz-timer.component';
import { AchievementNotificationComponent } from '../../modals/achievement-notification/achievement-notification.component';
import { DataErrorComponent } from '@app/shared/components/data-error/data-error.component';
import { QuizIntroComponent } from './components/quiz-intro/quiz-intro.component';
import { QuizResultComponent } from './components/quiz-result/quiz-result.component';
import { NextQuestionComponent } from './components/next-question/next-question.component';
import { QuizQuestionHeaderComponent } from './components/quiz-question-header/quiz-question-header.component';
import { QuizQuestionComponent } from './components/quiz-question/quiz-question.component';
import { QuizCompleteComponent } from './components/quiz-complete/quiz-complete.component';



@NgModule({
  declarations: [
    QuizShowsComponent,
    QuizCollectionsComponent,
    QuizComponent,
    QuizIntroComponent,
    QuizResultComponent,
    NextQuestionComponent,
    QuizQuestionHeaderComponent,
    QuizQuestionComponent,
    QuizCompleteComponent,
  ],
  imports: [
    CommonModule,
    QuizShowsRoutingModule,
    PresentAsTitlePipe,
    ButtonComponent,
    QuizTimerComponent,
    AchievementNotificationComponent,
    DataErrorComponent
  ]
})
export class QuizShowsModule { }
