import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase/firebase.service';
import {
  LogErrorMessage,
  LogErrorMessage$,
  RandomUsernameCreation
} from '@app/shared/utilities/utils';
import { EMPTY, Observable, Subject, catchError, map, of, switchMap, take } from 'rxjs';
import { Achievement, UserData } from '@app/models/auth.models';
import { Router } from '@angular/router';
import { LogService } from '@app/shared/services/log.service';
import { StorageService } from '@app/shared/services/storage.service';
import { DbRootKey, Paths } from '@app/models/shared/global.models';
import { ToastService } from '@app/shared/services/toast.service';
import { AchievementCheck } from '@app/models/quiz.models';
import { Location } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private firebaseSVC: FirebaseService,
    private storageSVC: StorageService,
    private router: Router,
    private logSVC: LogService,
    private toastSvc: ToastService,
    private location: Location
  ) {}

  error: Subject<string> = new Subject();
  error$ = this.error.asObservable();
  readonly errorMsgPreface: string = 'Hmm... an error occured while attempting to';

  get user$(): Observable<any> {
    return this.firebaseSVC.auth.user;
  }

  get authError$(): Observable<string> {
    return this.error$;
  }

  get userData$(): Observable<UserData> {
    return this.user$.pipe(
      take(1),
      switchMap(user => {
        return this.firebaseSVC.db
          .collection<UserData>(DbRootKey.USERS)
          .doc(user.uid)
          .valueChanges();
      })
    );
  }

  async register(email: string, password: string, username: string): Promise<void> {
    if (!username) username = RandomUsernameCreation();
    const avatar = this.assignAvatar(username);
    await this.firebaseSVC.auth
      .createUserWithEmailAndPassword(email, password)
      .then(data => {
        this.firebaseSVC.db.collection(DbRootKey.USERS).doc(data.user.uid).set({
          avatar,
          username,
          email,
          uid: data.user.uid,
          role: 'user',
          created: Date.now(),
          achievements: []
        });
        this.logSVC.emit('log', 'User registered successfully.');
        this.router.navigate([Paths.PROFILE]);
      })
      .catch(error => {
        this.logSVC.emit('error', `Register error: ${error}`);
        this.error.next(
          `${this.errorMsgPreface} register the account. Most likely the email already exists, try logging in.`
        );
      });
  }

  async signIn(email: string, password: string): Promise<void> {
    await this.firebaseSVC.auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.logSVC.emit('log', 'User signed in successfully.');
        this.router.navigate([Paths.PROFILE]);
      })
      .catch(error => {
        this.logSVC.emit('error', `Sign in error: ${error}`);
        this.error.next(`${this.errorMsgPreface} login. Possibly an incorrect email or password?`);
      });
  }

  async logout(): Promise<void> {
    await this.firebaseSVC.auth
      .signOut()
      .then(() => {
        this.storageSVC.wipeStorage();
        this.logSVC.emit('log', 'User logged out successfully.');
        this.router.navigate([Paths.EMPTY]);
        this.toastSvc.emitToastNotification(3000, 'You have been logged out.');
      })
      .catch(error => {
        this.logSVC.emit('error', `Logout error: ${error}`);
      });
  }

  saveUsersQuizResults(quizResult: Achievement) {
    this.userDocument$
      .pipe(
        switchMap(userData => {
          const achievements = userData
            .data()
            .achievements.filter(
              (achievement: Achievement) =>
                achievement.show !== quizResult.show || achievement.season !== quizResult.season
            );
          return this.firebaseSVC.db
            .collection(DbRootKey.USERS)
            .doc(userData.id)
            .update({ achievements: [...achievements, quizResult] });
        }),
        catchError(() => {
          this.error.next(
            `${this.errorMsgPreface} store the quiz result. If you would like to save your quiz results, please sign in or register.`
          );
          return LogErrorMessage$('Error saving quiz result to user profile.');
        })
      )
      .subscribe();
  }

  updateUsername(username: string): void {
    this.userDocument$
      .pipe(
        switchMap(async userData => {
          return await this.firebaseSVC.db
            .collection(DbRootKey.USERS)
            .doc(userData.id)
            .update({ username })
            .then(() =>
              this.toastSvc.emitToastNotification(3000, 'Username updated successfully.')
            );
        }),
        catchError(() => {
          this.error.next(`${this.errorMsgPreface} update your username. Perhaps try again?`);
          return LogErrorMessage$('Error updating username.');
        })
      )
      .subscribe();
  }

  resetPassword(email: string): void {
    this.firebaseSVC.auth
      .sendPasswordResetEmail(email)
      .then(_ => this.router.navigate([`/${Paths.AUTH}/${Paths.SIGN_IN}`]))
      .catch(err => {
        this.error.next(
          `${this.errorMsgPreface} reset your password. You could already have an account or you can try again.`
        );
        return LogErrorMessage('Error attempting to reset password.');
      });
  }

  deleteUser$(): Observable<any> {
    return this.user$.pipe(
      take(1),
      map(async user => {
        await this.firebaseSVC.db.collection(DbRootKey.USERS).doc(user.uid).delete();
        await user.delete();
      }),
      catchError(() => {
        this.error.next(`${this.errorMsgPreface} delete your profile. Perhaps try again?`);
        return LogErrorMessage$('Error deleting profile.');
      })
    );
  }

  warnIfUserHasAchievements(quiz: AchievementCheck): Observable<boolean> {
    return this.userDocument$.pipe(
      switchMap(userData => {
        const achievement = userData
          .data()
          .achievements.filter(
            (achievement: Achievement) =>
              achievement.show === quiz.show && achievement.season === quiz.season
          );
        return achievement.length ? of(true) : of(false);
      })
    );
  }

  refreshAppData$(): Observable<boolean> {
    const timestamps = this.storageSVC.getTimestamps();
    const currentTime = Date.now();
    if (currentTime - timestamps.future > 0) {
      this.storageSVC.wipeStorage();
      this.location.go(this.location.path());
    };
    return of(true);
  }

  private assignAvatar(username: string): string {
    return `https://api.dicebear.com/7.x/thumbs/svg?seed=${username}`;
  }

  private get userDocument$(): Observable<any> {
    return this.user$.pipe(
      take(1),
      switchMap(user => {
        if (!user?.uid) return EMPTY;
        return this.firebaseSVC.db.collection<UserData>(DbRootKey.USERS).doc(user.uid).get();
      })
    );
  }
}
