import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase/firebase.service';
import { RandomUsernameCreation } from '@app/shared/utilities/utils';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private firebaseSVC: FirebaseService,
  ) {}

  get user$(){
    return this.firebaseSVC.user$;
  }

  get authError$(){
    return this.firebaseSVC.error$;
  }

  register(email: string, password: string, username: string) {
    if(!username) username = RandomUsernameCreation();
    const newUserData = {
      username,
      email,
      avatar: this.assignAvatar(username),
    }
    return this.firebaseSVC.register(newUserData, password);
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


  private assignAvatar(username: string): string {
    return `https://api.dicebear.com/7.x/thumbs/svg?seed=${username}`
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

