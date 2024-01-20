import { Component, ElementRef, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { AnswerEmit, Questions, Timer } from '@app/models/quiz.models';
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
  @Output() emitSetSelectedAnswer: EventEmitter<AnswerEmit> = new EventEmitter<AnswerEmit>();
  @ViewChildren('selectedAnswer') selectedAnswer: QueryList<ElementRef<HTMLButtonElement>>;

  onSetSelectedAnswer(answer: string): void {
    this.emitSetSelectedAnswer.emit({ answer, btnRef: this.selectedAnswer });
  }
}
