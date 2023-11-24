import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IndividualSeason, Questions, QuizItem, SeasonsWithId } from '@app/models/quiz.models';
import { GetParam, Paths, QuizButton } from '@app/models/shared/global.models';
import { QuizService } from '@app/services/quiz/quiz.service';
import { StorageService } from '@app/shared/services/storage.service';
import { Observable, of, take, tap } from 'rxjs';

@Component({
  selector: 'bs-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss']
})
export class QuizQuestionComponent implements OnInit, OnDestroy {
  seasonQuizData$: Observable<Questions[]> = new Observable();
  questionIndex: number = 0;
  quizBtnState: QuizButton = 'Begin';
  confirmQuizStart: boolean = false;
  userQuizResult: number = 0;
  quizCompleted: boolean = false;

  private seasonQuizAnswers: string[] = [];
  private userAnswerStore: string[] = [];
  private questionLimit: number = 0;
  private selectedOption: string = '';
  private seasonParam: GetParam = null;
  private showIdParam: GetParam = null;

  constructor(
    private quizSVC: QuizService,
    private activeRoute: ActivatedRoute,
    private storageSVC: StorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.seasonParam = this.activeRoute.snapshot.paramMap.get('season');
    this.showIdParam = this.activeRoute.snapshot.paramMap.get('id');
    this.getDataAndSetInStorage();
  }

  initiateQuiz(): void {
    this.confirmQuizStart = true;
    this.updateQuizButtonState('Next');
    this.storageSVC.setQuizInit();
  }

  toggleNext(): void {
    if (this.questionIndex === this.questionLimit - 1) {
      this.storeSelectedAnswer();
      this.updateQuizButtonState('Finish');
      return;
    }
    this.storeSelectedAnswer();
    this.questionIndex++;
  }

  setSelectedAnswer(answer: string): void {
    this.selectedOption = answer;
  }

  toggleComplete(): void {
    if(this.quizCompleted){
      this.closeQuizAndReturnHome();
    }
    this.quizCompleted = true;
    this.totalQuizScore();
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
      this.storeQuizAnswers(selectedSeason!);
      return selectedSeason!;
    });
    this.seasonQuizData$ = of(
      season.quiz.map((data: QuizItem) => {
        return {
          question: data.question,
          options: [...data.alts, data.answer].sort(() => Math.random() - 0.5)
        };
      })
    ).pipe(tap((questions: Questions[]) => this.setQuestionRange(questions)));
  }

  private setSeasonDataInStorage(data: SeasonsWithId[]): void {
    if(data.length) this.storageSVC.setSeasons(this.showIdParam!, data);
  }

  private setQuestionRange(questions: Questions[]): void {
    this.questionLimit = questions.length;
  }

  private totalQuizScore(): void {
    let totalScore = 0;
    for (let i = 0; i < this.seasonQuizAnswers.length; i++) {
      if (this.seasonQuizAnswers[i] === this.userAnswerStore[i]) ++totalScore;
    }
    this.userQuizResult = totalScore;
  }

  private updateQuizButtonState(state: QuizButton): void {
    this.quizBtnState = state;
  }

  private storeSelectedAnswer() {
    this.userAnswerStore = [...this.userAnswerStore, this.selectedOption];
  }

  private storeQuizAnswers(season: IndividualSeason) {
    this.seasonQuizAnswers = season!.quiz.map((data: QuizItem) => data.answer);
  }

  private closeQuizAndReturnHome(): void {
    this.storageSVC.removeQuizInit();
    this.router.navigateByUrl(Paths.HOME);
  }

  ngOnDestroy(): void {
    this.storageSVC.removeQuizInit();
  }
}
