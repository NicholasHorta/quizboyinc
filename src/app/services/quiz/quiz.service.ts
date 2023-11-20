import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase/firebase.service';
import { Observable, map, of } from 'rxjs';
import { Seasons, SeasonsWithId, ShowWithId } from '@app/models/quiz.models';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  constructor(private firebaseSVC: FirebaseService) {}

  get shows$(): Observable<ShowWithId[]> {
    return this.firebaseSVC.db
      .collection<ShowWithId>('shows')
      .valueChanges({ idField: 'id' });
  }

  getSeasonQuizData$(showId: string): Observable<SeasonsWithId[]> {
    return this.firebaseSVC.db
      .collectionGroup<SeasonsWithId>('seasons', ref => ref.where('showId', '==', showId))
      .valueChanges({ idField: 'id' })
      .pipe(map(data => data));
  }
}
