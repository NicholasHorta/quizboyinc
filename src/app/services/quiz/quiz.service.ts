import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase/firebase.service';
import { Observable } from 'rxjs';


interface Test {
  give: {
    one: number
  },
  totalArr: string[]

}
@Injectable({
  providedIn: 'root'
})
export class QuizService {
  constructor(private firebaseSVC: FirebaseService) {}

  getTestCollection(): Observable<any> {
    return this.firebaseSVC.db.doc<Test>('test/Eb7J6716fJ19Gf8RQJvW').valueChanges()
  }
}
