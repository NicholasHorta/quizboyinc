import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(
    private ngFirestore: AngularFirestore,
    private ngFireAuth: AngularFireAuth,
  ) {}

  get db(): AngularFirestore {
    return this.ngFirestore;
  }

  get createId(): string {
    return this.ngFirestore.createId();
  }

  get auth(): AngularFireAuth {
    return this.ngFireAuth;
  }
}
