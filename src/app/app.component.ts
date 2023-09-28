import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { interval, tap } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private ngFirestore: AngularFirestore) {}

  title = 'quiz';

  ngOnInit() {

  }
  iWantThat(){
    this.ngFirestore
    .collection('test')
    .doc('Dqf3bCYGHWCFmgcSG1Nb')
    .get()
    .subscribe((i) => console.log('Data request: ', i.data()));
  }
}
