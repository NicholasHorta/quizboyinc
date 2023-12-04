import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase/firebase.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private firebaseSVC: FirebaseService,
  ) {}

  // errorMsgPreface: string = 'Hmm... an error occured while attempting to';
  // registerErrorMsg: string = `${this.errorMsgPreface} register the account. Most likely the email already exists, try logging in.`;
  // loginErrorMsg: string = `${this.errorMsgPreface} login. Possibly an incorrect email or password?`;
  // error$: Subject<string> = new Subject();
  // private currentUser: string | undefined = '';
  // private role: string = 'user';


  registerUser(email: string, password: string) {
    return this.firebaseSVC.registerUser(email, password);
  }

  check(){
    return this.firebaseSVC.check();
  }
  checkIn(){
    return this.firebaseSVC.checkIn();
  }

  // userLogin(email: string, password: string) {
  //   this.fireAuth
  //     .signInWithEmailAndPassword(email, password)
  //     .then(async () => {
  //       localStorage.setItem('token', 'true');
  //       await this.fireAuth.currentUser.then(
  //         (user) => (this.currentUser = user?.uid)
  //       );
  //       console.log(this.currentUser);
  //       this.storeUID(this.currentUser);
  //       this.redirectAfterAuth('collections');
  //     })
  //     .catch((err) => {
  //       console.error(this.loginErrorMsg);
  //       this.error$.next(this.loginErrorMsg);
  //     });
  // }

  // async userRegister(email: string, password: string, username: string) {
  //   return this.fireAuth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then(async (user) => {
  //       // if (!username || username.length < 2)
  //       //   username = RandomUsernameCreation();
  //       this.currentUser = user.user?.uid;
  //       console.log(this.currentUser);

  //       this.firebaseSVC.db.
  //       await this.userOpsSVC.setUserObjectInDB(user.user?.uid, username, this.role);
  //       this.storeUID(this.currentUser);a
  //       this.redirectAfterAuth('user-profile');
  //     })

  //     .catch((err) => {
  //       console.error(this.registerErrorMsg);
  //       this.error$.next(this.registerErrorMsg);
  //     });
  // }

  // userLogout() {
  //   this.fireAuth
  //     .signOut()
  //     .then(() => {
  //       localStorage.clear();
  //       this.redirectAfterAuth('login');
  //     })
  //     .catch((err) => {
  //       alert(`${this.errorMsgPreface} logout. Please try again.`);
  //     });
  // }

  // resetPassword(email: string) {
  //   this.fireAuth
  //     .sendPasswordResetEmail(email)
  //     .then(_ => this.router.navigate(['/login']))
  //     .catch((err) => {
  //       alert(
  //         'An error occured attempting to reset your password. Please try again.'
  //       );
  //     });
  // };

  // redirectAfterAuth(location: string) {
  //   this.router.navigate([`/${location}`]);
  // };

  // //* Store in a component that isn't destroyed
  // storeUID(userId: any) {
  //   localStorage.setItem('uid', userId);
  // }
}
