import { Component, Input } from '@angular/core';
import { UserData } from '@app/models/auth.models';
import { Paths } from '@app/models/shared/global.models';
import { Observable, delay, interval, map, takeWhile } from 'rxjs';

@Component({
  selector: 'bs-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.scss']
})
export class QuizResultComponent {
  @Input() quizCompleted: boolean;
  @Input() userQuizResult: number;
  @Input() userExists$: Observable<boolean>;
  @Input() userData$: Observable<UserData>;

  Paths = Paths;
  score$: Observable<number>;
  scoreClass: string;


  ngOnInit(): void {
    this.score$ = interval(15).pipe(
      delay(1000),
      takeWhile(count => count <= this.userQuizResult),
      map(count => {
        this.quizResultClass(count)
        return count
      }),
    )
  }

  quizResultClass(score: number): void {
    if (score >= 75) {
      this.scoreClass = 'quiz-result-high';
    } else if (score >= 55) {
      this.scoreClass = 'quiz-result-h-mid';
    } else if (score >= 40) {
      this.scoreClass = 'quiz-result-l-mid';
    } else {
      this.scoreClass = 'quiz-result-low';
    }
  }
}
