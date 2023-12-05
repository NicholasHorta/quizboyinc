import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, tap } from 'rxjs';
import { LogService } from '@app/shared/services/log.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private ngFirestore: AngularFirestore, private ngFireAuth: AngularFireAuth, private logSVC: LogService) {}

  get db(): AngularFirestore {
    return this.ngFirestore;
  }

  get createId(): string {
    return this.ngFirestore.createId();
  }

  get user$(): Observable<any> {
    return this.ngFireAuth.user;
  }

  // test@gmail.com
  register(email: string, password: string) {
    return this.ngFireAuth.createUserWithEmailAndPassword(email, password).then(() => {
      this.logSVC.emit('log', 'User registered successfully.')
    }).catch(error => {
      this.logSVC.emit('error', `Register error: ${error}`)
    });
  }

  signIn(email: string, password: string){
    return this.ngFireAuth.signInWithEmailAndPassword(email, password).then(() => {
      this.logSVC.emit('log', 'User signed in successfully.')
    }).catch(error => {
      this.logSVC.emit('error', `Sign in error: ${error}`)
    });
  }

  logout(){
    this.ngFireAuth.signOut().then(() => {
      this.logSVC.emit('log', 'User logged out successfully.')
    }).catch(error => {
      this.logSVC.emit('error', `Logout error: ${error}`)
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
