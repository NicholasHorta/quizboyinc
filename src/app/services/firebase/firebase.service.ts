import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private ngFirestore: AngularFirestore, private ngFireAuth: AngularFireAuth) {}

  get db(): AngularFirestore {
    return this.ngFirestore;
  }

  get createId(): string {
    return this.ngFirestore.createId();
  }

  // test@gmail.com
  registerUser(email: string, password: string) {
    return this.ngFireAuth.createUserWithEmailAndPassword(email, password).then(user => {
      console.log(`%c USER `, `background: red; color: white;`, user)
    });
  }

  check(){
    this.ngFireAuth.user.subscribe(user => {
      console.log(`%c USER `, `background: red; color: white;`, user)
    })
  }

  checkIn(){
    this.ngFireAuth.user.pipe(tap(i => console.log('%c < Tap Log > ', 'color: deeppink; border: 2px solid deeppink; border-radius: 8px;', i))).subscribe()
    this.ngFireAuth.authState.pipe(tap(i => console.log('%c < Tap Log > ', 'color: deeppink; border: 2px solid deeppink; border-radius: 8px;', i))).subscribe()
  }


}
