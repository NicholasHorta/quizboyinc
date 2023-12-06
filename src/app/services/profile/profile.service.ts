import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebase/firebase.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private firebaseSVC: FirebaseService) { }

  get currentUser$(){
    return this.firebaseSVC.userData$;
  }
}
