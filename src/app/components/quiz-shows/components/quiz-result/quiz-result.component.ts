import { Component, Input } from '@angular/core';
import { UserData } from '@app/models/auth.models';
import { Paths } from '@app/models/shared/global.models';
import { Observable } from 'rxjs';

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
 Paths = Paths
}
