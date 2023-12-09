import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase/firebase.service';
import { Observable, catchError, interval, map, of, take, tap } from 'rxjs';
import { ShowCollection, ShowWithId, Timer } from '@app/models/quiz.models';
import { LogErrorMessage } from '@app/shared/utilities/utils';
import { DbRootKey } from '@app/models/shared/global.models';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  constructor(private firebaseSVC: FirebaseService) {}

  getShowsFromDB$(): Observable<ShowWithId[]> {
    return this.firebaseSVC.db
      .collection<ShowWithId>(DbRootKey.SHOWS)
      .valueChanges({ idField: 'id' })
      .pipe(
        tap(data => {
          if (!data || data.length === 0) {
            LogErrorMessage('No shows found in database');
          }
        })
      );
  }

  getSeasonQuizData$(showId: string): Observable<ShowCollection[]> {
    return this.firebaseSVC.db
      .collectionGroup<ShowCollection>(DbRootKey.SEASONS, ref => ref.where('showId', '==', showId))
      .valueChanges({ idField: 'id' })
      .pipe(map(data => data), catchError(err => of(err)));
  }

  quizQuestionTimer$(): Observable<Timer> {
    const maximumSecs = 30;
    const events = maximumSecs + 1;
    return interval(1000).pipe(
      take(events),
      map(second => {
        return second === maximumSecs
          ? { time: second, isTimeUp: true }
          : { time: second, isTimeUp: false };
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
