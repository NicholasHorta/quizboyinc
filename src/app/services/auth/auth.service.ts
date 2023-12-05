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


  register(email: string, password: string) {
    return this.firebaseSVC.register(email, password);
  }

  signIn(email: string, password: string){
    return this.firebaseSVC.signIn(email, password);
  }

  get user$(){
    return this.firebaseSVC.user$;
  }

  logout(){
    return this.firebaseSVC.logout();
  }

  check(){
    return this.firebaseSVC.check();
  }
  checkIn(){
    return this.firebaseSVC.checkIn();
  }




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
