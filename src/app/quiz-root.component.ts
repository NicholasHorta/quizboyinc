import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'quiz-root',
  templateUrl: './quiz-root.component.html',
  styleUrls: ['./quiz-root.component.scss'],
})
export class QuizComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  title = 'quiz';
  form!: FormGroup;
  ngOnInit() {
    this.form = this.fb.group({
      input: [null]
    })
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
