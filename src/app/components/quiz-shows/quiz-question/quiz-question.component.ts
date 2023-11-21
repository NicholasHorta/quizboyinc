import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IndividualSeason, Questions, QuizItem, SeasonsWithId } from '@app/models/quiz.models';
import { GetParam } from '@app/models/shared/global.models';
import { QuizService } from '@app/services/quiz/quiz.service';
import { StorageService } from '@app/shared/services/storage.service';
import { Observable, of, take, tap } from 'rxjs';

@Component({
  selector: 'bs-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss']
})
export class QuizQuestionComponent implements OnInit {
  seasonQuizData$: Observable<Questions[]> = new Observable();
  confirmQuizStart: boolean = false;
  questionLimit: number = 0;
  questionIndex: number = 0;
  seasonParam: GetParam = null;
  showIdParam: GetParam = null;
  selectedOption: string = '';
  answerStore: string[] = [];

  constructor(
    private quizSVC: QuizService,
    private activeRoute: ActivatedRoute,
    private storageSVC: StorageService
  ) {}

  ngOnInit(): void {
    this.seasonParam = this.activeRoute.snapshot.paramMap.get('season');
    this.showIdParam = this.activeRoute.snapshot.paramMap.get('id');
    this.getDataAndSetInStorage();
  }

  initiateQuiz(): void {
    this.confirmQuizStart = true;
  }

  setQuestionRange(questions: Questions[]): void {
    this.questionLimit = questions.length;
  }

  toggleNextQuestion(): void {
    console.log(`%c NUM `, `background: cyan; color: black;`, this.questionIndex);
    console.log(`%c SELECTED ANSWERS `, `background: yellow; color: black;`, this.answerStore)
    if (this.questionIndex === this.questionLimit - 1) {
      //@ Finish up quiz and tally score
      //@ Assign score to user
      return;
    }
    this.questionIndex++;
    this.storeSelectedAnswer();
  }

  setSelectedAnswer(answer: string): void {
    console.log(`%c SELECTED `, `background: salmon; color: white;`, answer)
    this.selectedOption = answer;
  }

  storeSelectedAnswer(){
    this.answerStore = [...this.answerStore, this.selectedOption];
  }

  //? BRIDGE POSSIBLE
  private getDataAndSetInStorage(): void {
    const seasonData: SeasonsWithId[] = this.storageSVC.getSeasons(this.showIdParam!)!;
    if (seasonData) {
      this.configureQuizData(seasonData);
      return;
    }

    this.quizSVC
      .getSeasonQuizData$(this.showIdParam!)
      .pipe(
        take(1),
        tap((seasons: SeasonsWithId[]) => this.setSeasonDataInStorage(seasons)),
        tap((seasonData: SeasonsWithId[]) => this.configureQuizData(seasonData))
      )
      .subscribe();
  }

  private configureQuizData(data: SeasonsWithId[]): void {
    const [season] = data.map((data: SeasonsWithId) => {
      const selectedSeason = data.seasons.find(
        (season: IndividualSeason) => season.season === this.seasonParam
      );
      return selectedSeason!;
    });
    this.seasonQuizData$ = of(
      season.quiz.map((data: QuizItem) => {
        return {
          question: data.question,
          options: [...data.alts, data.answer]
        };
      })
    ).pipe(tap((questions: Questions[]) => this.setQuestionRange(questions)));
  }

  private setSeasonDataInStorage(data: SeasonsWithId[]): void {
    this.storageSVC.setSeasons(this.showIdParam!, data);
  }
}
