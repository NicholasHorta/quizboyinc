import { Injectable } from '@angular/core';
import { UserService } from '../auth/user.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private userSVC: UserService) { }

  get currentUser$(){
    return this.userSVC.userData$;
  }
}
