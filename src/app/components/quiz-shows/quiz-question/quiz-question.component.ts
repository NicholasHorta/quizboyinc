import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Season, Seasons, ShowWithId } from '@app/models/quiz.models';
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
  seasonData$: Observable<any> = new Observable<any>();
  confirmQuizInit: boolean = false;
  questionLimit: number = 0;
  questionIndex: number = 0;
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
    this.setSeasonData();
  }

  private setSeasonData(): void {
    this.quizSVC
      .getSeasonQuizData$(this.showIdParam!)
      .pipe(
        take(1),
        tap(data => this.setSeasonDataInStorage(data)),
        tap(i =>
          console.log(
            '%c < Tap Log > ',
            'color: deeppink; border: 2px solid deeppink; border-radius: 8px;',
            i
          )
        ),
        tap(seasonData => {
          //> Check if data exists already
          const [season] = seasonData.map((data: any) => {
            const selectedSeason = (this.seasonData$ = data.seasons.find(
              (season: any) => season.season === this.seasonParam
            ));
            return selectedSeason;
          });
          this.seasonData$ = of(season.quiz.map((data: any) => {
            return {
              question: data.question,
              answer: data.answer,
              options: [...data.alts, data.answer]
            };
          })).pipe(tap(questions => {
            this.questionLimit = questions.length;
            console.log(`%c QL `, `background: red; color: white;`, this.questionLimit)
          }));
        })
      )
      .subscribe();
  }

  initiateQuiz(): void {
    this.confirmQuizInit = true;
  }

  toggleNextQuestion(){
    console.log(`%c NUM `, `background: cyan; color: black;`, this.questionIndex)
    if(this.questionIndex === this.questionLimit - 1){
      //@ Finish up quiz and tally score
      //@ Assign score to user
      return;
    }
    this.questionIndex++;
  }

  //? Check if item has been retrieved from storage
  private setSeasonDataInStorage(data: any): void {
    this.storageSVC.setSeasons(this.showIdParam!, data);
  }
}
