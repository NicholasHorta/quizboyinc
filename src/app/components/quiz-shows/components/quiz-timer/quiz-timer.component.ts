import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Timer } from '@app/models/quiz.models';

@Component({
  selector: 'bs-quiz-timer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz-timer.component.html',
  styleUrls: ['./quiz-timer.component.scss']
})
export class QuizTimerComponent implements OnInit {

  @Input() quizTimer: Timer = {time: 0, isTimeUp: false};

  ngOnInit(): void {
    console.log(`%c RUN `, `background: purple; color: white;`, )
  }

}
