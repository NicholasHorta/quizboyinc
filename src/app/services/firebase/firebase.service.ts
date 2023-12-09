import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, Subject, switchMap, take, tap } from 'rxjs';
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

  error: Subject<string> = new Subject();
  error$ = this.error.asObservable();
  readonly errorMsgPreface: string = 'Hmm... an error occured while attempting to';


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
      switchMap(user => {
        return this.ngFirestore.collection<UserData>('users').doc(user.uid).valueChanges();
      })
    );
  }

  async register(data: Partial<UserData>, password: string) {
    const { email, username, avatar } = data;
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
        this.error.next(`${this.errorMsgPreface} register the account. Most likely the email already exists, try logging in.`)
      });
  }

  async signIn(email: string, password: string) {
    return this.ngFireAuth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.logSVC.emit('log', 'User signed in successfully.');
        this.router.navigate(['/profile']);
      })
      .catch(error => {
        this.logSVC.emit('error', `Sign in error: ${error}`);
        this.error.next(`${this.errorMsgPreface} login. Possibly an incorrect email or password?`)
      });
  }

  async logout() {
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
