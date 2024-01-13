import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Questions, Timer } from '@app/models/quiz.models';
import { QuizButton } from '@app/models/shared/global.models';

@Component({
  selector: 'bs-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss']
})
export class QuizQuestionComponent {
  @Input() data: Questions[];
  @Input() timer: Timer;
  @Input() quizBtnState: QuizButton;
  @Input() questionIndex: number;
  @Output() emitSetSelectedAnswer: EventEmitter<string> = new EventEmitter<string>();

  onSetSelectedAnswer(option:string): void {
    this.emitSetSelectedAnswer.emit(option);
  }
}
