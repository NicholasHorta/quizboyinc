import { Component, Input } from '@angular/core';

@Component({
  selector: 'bs-quiz-complete',
  templateUrl: './quiz-complete.component.html',
  styleUrls: ['./quiz-complete.component.scss']
})
export class QuizCompleteComponent {
  @Input() title: string;
  @Input() seasonParam: string;
  @Input() quizCompleted: boolean;
}
