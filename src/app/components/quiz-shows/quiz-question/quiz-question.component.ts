import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShowWithId } from '@app/models/quiz.models';
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
  season: string | null = null;
  showId: string | null = null;
  constructor(
    private quizSVC: QuizService,
    private activeRoute: ActivatedRoute,
    private storageSVC: StorageService
  ) {}

  ngOnInit(): void {
    this.season = this.activeRoute?.snapshot?.paramMap?.get('season');
    this.showId = this.activeRoute?.snapshot?.paramMap?.get('id');
    this.setSeasonDataInStorage();
  }

  initiateQuiz(): void {
    this.confirmQuizInit = true;
  }

  setSeasonQuestions(): void {
    console.log(`%c RUN `, `background: #a1f2aa; color: #333;`, )
    this.questions$ = of(this.storageSVC.getItem(`${this.showId}_${StorageKeys.SEASONS}`)).pipe(
      map((data: any) => {
        console.log(`%c ASS `, `background: #f77528; color: black;`, )
        return data[0].seasons.find((data: any) => data.season === this.season).quiz;
      }),
      tap((data: any) => {
        const proxyArr: any = []
        this.options$ = of(data).pipe(map((data: any) => {
          for(const question in data){
            proxyArr.push(data[question].alts);
          }
          proxyArr.push(data.answer);
          const arr = proxyArr.sort(() => Math.random() - 0.5)
          console.log(`%c proxy `, `background: white; color: red;`, arr)
          return arr
        }));
      })
    );
  }


  //? Check if item has been retrieved from storage
  private setSeasonDataInStorage(): void {
    this.quizSVC
      .getSeasonQuizData(this.showId ?? '')
      .pipe(
        take(1),
        map((seasonData: any) => {
          this.storageSVC.setItem(
            `${this.showId}_${StorageKeys.SEASONS}`,
            JSON.stringify(seasonData)
          );
          this.setSeasonQuestions();
        })
      )
      .subscribe();
  }
}
