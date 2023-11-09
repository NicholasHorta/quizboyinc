import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private ngFirestore: AngularFirestore) {}

  get db(): AngularFirestore{
    return this.ngFirestore;
  }

  get createId(): string {
    return this.ngFirestore.createId();
  }
}
