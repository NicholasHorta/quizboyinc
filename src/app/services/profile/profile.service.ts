import { Injectable } from '@angular/core';
import { UserService } from '../auth/user.service';
import { Observable } from 'rxjs';
import { UserData } from '@app/models/auth.models';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private userSVC: UserService) { }

  get currentUser$(): Observable<UserData>{
    return this.userSVC.userData$;
  }
}
