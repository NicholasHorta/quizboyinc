import { Component, ElementRef, Input, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Timer } from '@app/models/quiz.models';

@Component({
  selector: 'bs-quiz-timer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz-timer.component.html',
  styleUrls: ['./quiz-timer.component.scss']
})
export class QuizTimerComponent implements OnChanges {
  @ViewChild('timer') timer: ElementRef;
  @Input() quizTimer: Timer = {time: 0, isTimeUp: false};


  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges && this.timer && this.quizTimer) {
      this.timer.nativeElement.style.setProperty('width', `${ this.quizTimer.time / 30 * 100}%`)
      this.quizTimer.isTimeUp ? this.timer.nativeElement.style.setProperty('width', '100%') : null;
    }
  }
}
