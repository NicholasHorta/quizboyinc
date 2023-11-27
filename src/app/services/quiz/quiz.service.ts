import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase/firebase.service';
import { Observable, interval, map, take, tap } from 'rxjs';
import { SeasonsWithId, ShowWithId, Timer } from '@app/models/quiz.models';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  constructor(private firebaseSVC: FirebaseService) {}

  get shows$(): Observable<ShowWithId[]> {
    return this.firebaseSVC.db.collection<ShowWithId>('shows').valueChanges({ idField: 'id' });
  }

  getSeasonQuizData$(showId: string): Observable<SeasonsWithId[]> {
    return this.firebaseSVC.db
      .collectionGroup<SeasonsWithId>('seasons', ref => ref.where('showId', '==', showId))
      .valueChanges({ idField: 'id' })
      .pipe(map(data => data));
  }

  quizQuestionTimer$(): Observable<Timer> {
    return interval(1000).pipe(
      take(15),
      // take(31),
      map(second => {
        if (second === 14) return { time: second, isTimeUp: true };
        // if (second === 30) return { time: second, isTimeUp: true };
        return { time: second, isTimeUp: false };
      }),
      tap(i =>
        console.log(
          '%c < Tap Log > ',
          'color: deeppink; border: 2px solid deeppink; border-radius: 8px;',
          i
        )
      )
    );
  }
}
