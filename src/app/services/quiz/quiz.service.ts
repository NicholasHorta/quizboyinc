import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase/firebase.service';
import { Observable } from 'rxjs';
import { Show } from '@app/models/quiz.interface';


@Injectable({
  providedIn: 'root'
})
export class QuizService {
  constructor(private firebaseSVC: FirebaseService) {}

  getTestCollection(): Observable<any> {
    return this.firebaseSVC.db.collection('shows').valueChanges() as unknown as Observable<Show>;
  }
}
