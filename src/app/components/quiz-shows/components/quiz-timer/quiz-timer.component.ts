import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Timer } from '@app/models/quiz.models';

@Component({
  selector: 'bs-quiz-timer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz-timer.component.html',
  styleUrls: ['./quiz-timer.component.scss']
})
export class QuizTimerComponent {
  @Input() quizTimer: Timer = {time: 0, isTimeUp: false};
}
