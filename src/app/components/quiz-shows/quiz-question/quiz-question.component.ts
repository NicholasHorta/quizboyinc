import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShowWithId } from '@app/models/quiz.models';
import { GetParam } from '@app/models/shared/global.models';
import { StorageKeys } from '@app/models/storage.models';
import { QuizService } from '@app/services/quiz/quiz.service';
import { StorageService } from '@app/shared/services/storage.service';
import { Observable, map, of, take, tap } from 'rxjs';

@Component({
  selector: 'bs-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss']
})
export class QuizQuestionComponent implements OnInit {
  questions$: Observable<any> = new Observable<any>();
  options$: Observable<any> = new Observable<any>();
  confirmQuizInit: boolean = false;
  seasonParam: GetParam = null;
  showIdParam: GetParam = null;
  constructor(
    private quizSVC: QuizService,
    private activeRoute: ActivatedRoute,
    private storageSVC: StorageService
  ) {}

  ngOnInit(): void {
    this.seasonParam = this.activeRoute?.snapshot?.paramMap?.get('season');
    this.showIdParam = this.activeRoute?.snapshot?.paramMap?.get('id');
    this.setSeasonDataInStorage();
  }

  initiateQuiz(): void {
    this.confirmQuizInit = true;
  }

  setSeasonQuestions(): void {
  }


  //? Check if item has been retrieved from storage
  private setSeasonDataInStorage(): void {
    console.log(`%c season `, `background: yellow; color: black;`, this.seasonParam)
    console.log(`%c id `, `background: red; color: white;`, this.showIdParam)
    this.quizSVC.getSeasonQuizData$(this.showIdParam).subscribe(i => console.log(`%c i `, `background: cyan; color: black;`, i))
  }
}
