import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { interval, tap } from 'rxjs';
@Component({
  selector: 'quiz-root',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  constructor(private ngFirestore: AngularFirestore, private fb: FormBuilder) {}

  title = 'quiz';
  form!: FormGroup;
  ngOnInit() {
    this.form = this.fb.group({
      input: [null]
    })
  }
  iWantThat(){
    this.ngFirestore
    .collection('test')
    .doc('Dqf3bCYGHWCFmgcSG1Nb')
    .get()
    .subscribe((i) => console.log('Data request: ', i.data()));
  }

  onPatchValue(){
    this.form.patchValue({input: 'test'})
  }

  onSubmit(){
    // this.onPatchValue()
    console.log('Submission', this.form.value)
  }


  emission(value: any){
    console.log(`%c RAN `, `background: red; color: white;`, value)
  }

}
