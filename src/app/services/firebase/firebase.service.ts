import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, switchMap, take, tap } from 'rxjs';
import { LogService } from '@app/shared/services/log.service';
import { StorageService } from '@app/shared/services/storage.service';
import { Router } from '@angular/router';
import { UserData } from '@app/models/auth.models';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(
    private ngFirestore: AngularFirestore,
    private ngFireAuth: AngularFireAuth,
    private logSVC: LogService,
    private storageSVC: StorageService,
    private router: Router
  ) {}

  get db(): AngularFirestore {
    return this.ngFirestore;
  }

  get createId(): string {
    return this.ngFirestore.createId();
  }

  get user$(): Observable<any> {
    return this.ngFireAuth.user;
  }

  get userData$(): Observable<UserData> {
    return this.user$.pipe(
      take(1),
      tap(i => console.log('%c < Tap Log > ', 'color: deeppink; border: 2px solid deeppink; border-radius: 8px;', i)),
      switchMap(user => {
        return this.ngFirestore.collection<UserData>('users').doc(user.uid).valueChanges();
      })
    );
  }

  register(data) {
    const { email, password, username, avatar } = data as {
      email: string;
      password: string;
      username: string;
      avatar: string;
    };
    return this.ngFireAuth
      .createUserWithEmailAndPassword(email, password)
      .then(data => {
        this.db.collection('users').doc(data.user.uid).set({
          avatar,
          username,
          email,
          uid: data.user.uid,
          role: 'user',
          created: Date.now(),
          achievements: []
        });
        this.logSVC.emit('log', 'User registered successfully.');
        this.router.navigate(['/profile']);
      })
      .catch(error => {
        this.logSVC.emit('error', `Register error: ${error}`);
      });
  }

  signIn(email: string, password: string) {
    return this.ngFireAuth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.logSVC.emit('log', 'User signed in successfully.');
        this.router.navigate(['/profile']);
      })
      .catch(error => {
        this.logSVC.emit('error', `Sign in error: ${error}`);
      });
  }

  logout() {
    this.ngFireAuth
      .signOut()
      .then(() => {
        this.storageSVC.wipeStorage();
        this.logSVC.emit('log', 'User logged out successfully.');
      })
      .catch(error => {
        this.logSVC.emit('error', `Logout error: ${error}`);
      });
  }

  check() {
    this.ngFireAuth.user.subscribe(user => {
      console.log(`%c USER `, `background: red; color: white;`, user);
    });
  }

  checkIn() {
    this.ngFireAuth.user
      .pipe(
        tap(i =>
          console.log(
            '%c < Tap Log > ',
            'color: deeppink; border: 2px solid deeppink; border-radius: 8px;',
            i
          )
        )
      )
      .subscribe();
    this.ngFireAuth.authState
      .pipe(
        tap(i =>
          console.log(
            '%c < Tap Log > ',
            'color: deeppink; border: 2px solid deeppink; border-radius: 8px;',
            i
          )
        )
      )
      .subscribe();
  }
}
