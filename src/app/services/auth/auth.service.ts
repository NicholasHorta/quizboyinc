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


  get user$(){
    return this.firebaseSVC.user$;
  }

  register(email: string, password: string, username: string) {
    if(!username) username = this.assignUsername();
    const newUserData = {
      username,
      email,
      password,
      avatar: this.assignAvatar(),
    }
    return this.firebaseSVC.register(newUserData);
  }

  signIn(email: string, password: string){
    return this.firebaseSVC.signIn(email, password);
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


  private assignUsername(): string {
    return `Automated Username ${Math.floor(Math.random() * 1000) + 1}`
  }

  private assignAvatar(): string {
    return `https://api.dicebear.com/8.x/thumbs/svg`
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

}

