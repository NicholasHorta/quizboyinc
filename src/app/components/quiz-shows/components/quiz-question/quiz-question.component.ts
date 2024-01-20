import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, QueryList, SimpleChanges, ViewChildren } from '@angular/core';
import { AnswerEmit, Questions, Timer } from '@app/models/quiz.models';
import { QuizButton } from '@app/models/shared/global.models';


@Component({
  selector: 'bs-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss']
})
export class QuizQuestionComponent implements OnChanges {
  @Input() data: Questions[];
  @Input() timer: Timer;
  @Input() quizBtnState: QuizButton;
  @Input() questionIndex: number;
  @Output() emitSetSelectedAnswer: EventEmitter<AnswerEmit> = new EventEmitter<AnswerEmit>();
  @Output() emitResetAnswers: EventEmitter<AnswerEmit> = new EventEmitter<AnswerEmit>();
  @ViewChildren('selectedAnswer') selectedAnswer: QueryList<ElementRef<HTMLButtonElement>>;

  onSetSelectedAnswer(answer: string): void {
    this.emitSetSelectedAnswer.emit({ answer, btnRef: this.selectedAnswer });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes && changes['questionIndex']){
      this.emitResetAnswers.emit({ answer: '', btnRef: this.selectedAnswer });
      // this.selectedAnswer.forEach((btn: ElementRef<HTMLButtonElement>) => {
      //   btn.nativeElement.classList.remove('selected');
      // });
    }
  }
}
