import { Component, Input } from '@angular/core';

@Component({
  selector: 'bs-quiz-question-header',
  templateUrl: './quiz-question-header.component.html',
  styleUrls: ['./quiz-question-header.component.scss']
})
export class QuizQuestionHeaderComponent {
  @Input() title: string;
  @Input() seasonParam: string;
  @Input() questionIndex: number;
  @Input() numberOfQuestions: number;
}
