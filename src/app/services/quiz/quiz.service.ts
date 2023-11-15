import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase/firebase.service';
import { Observable, of } from 'rxjs';
import { ShowWithId } from '@app/models/quiz.interface';


@Injectable({
  providedIn: 'root'
})
export class QuizService {
  constructor(private firebaseSVC: FirebaseService) {}

  get shows(): Observable<any> {
    return this.firebaseSVC.db.collection('shows').valueChanges({idField: 'id'}) as unknown as Observable<ShowWithId>;
  }

  getSeasons(show: string): Observable<any> {
    return this.firebaseSVC.db.collection('shows').doc(show).valueChanges();
  }
}
