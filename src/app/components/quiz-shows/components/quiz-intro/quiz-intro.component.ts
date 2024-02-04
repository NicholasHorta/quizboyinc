import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Paths } from '@app/models/shared/global.models';

@Component({
  selector: 'bs-quiz-intro',
  templateUrl: './quiz-intro.component.html',
  styleUrls: ['./quiz-intro.component.scss']
})
export class QuizIntroComponent {
  @Input() title: string;
  @Input() seasonParam: string;
  @Input() quizBtnState: string;
  @Input() showIdParam: string;
  @Input() isMobile: boolean;
  @Output() onInitiateQuizClick: EventEmitter<void> = new EventEmitter<void>();

  Paths = Paths;

  emitOnInitiateQuizClick(){
    this.onInitiateQuizClick.emit();
  }
}
