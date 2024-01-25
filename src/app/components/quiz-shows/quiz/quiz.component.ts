import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren
} from '@angular/core';
import { Router } from '@angular/router';
import { Achievement, UserData } from '@app/models/auth.models';
import {
  AnswerEmit,
  IndividualSeason,
  Questions,
  QuizItem,
  ShowCollection,
  Timer
} from '@app/models/quiz.models';
import { GetParam, Paths, QuizButton } from '@app/models/shared/global.models';
import { UserService } from '@app/services/auth/user.service';
import { ProfileService } from '@app/services/profile/profile.service';
import { QuizService } from '@app/services/quiz/quiz.service';
import { StorageService } from '@app/shared/services/storage.service';
import { Observable, map, of, take, tap } from 'rxjs';

@Component({
  selector: 'bs-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit, OnDestroy {
  @Input('id') showIdParam: GetParam;
  @Input('title') title: GetParam;
  @Input('season') seasonParam: GetParam;
  @ViewChildren('selectedAnswer') selectedAnswer: QueryList<ElementRef<HTMLButtonElement>>;

  quizBtnState: QuizButton = 'Begin';
  confirmQuizStart: boolean = false;
  quizCompleted: boolean = false;
  numberOfQuestions: number = 0;
  userQuizResult: number = 0;
  questionIndex: number = 0;
  quizTimer$: Observable<Timer>;
  seasonQuizData$: Observable<Questions[]>;
  authError$: Observable<string>;
  userExists$: Observable<boolean>;
  userData$: Observable<UserData>;
  Paths = Paths;

  private seasonQuizAnswers: string[] = [];
  private userAnswerStore: string[] = [];
  private questionLimit: number = 0;
  private selectedOption: string = '';

  constructor(
    private quizSVC: QuizService,
    private storageSVC: StorageService,
    private router: Router,
    private userSVC: UserService,
    private profileSVC: ProfileService
  ) {}

  ngOnInit(): void {
    this.storageSVC.removeQuizInProgress();
    this.getShowCollectionAndSetInStorage();
    this.authError$ = this.userSVC.authError$;
    this.userExists$ = this.userSVC.user$.pipe(map(user => !!user));
    this.userData$ = this.profileSVC.userData$;
  }

  ngOnDestroy(): void {
    this.storageSVC.removeQuizInProgress();
  }

  get isQuizInProgress(): boolean {
    return this.storageSVC.isQuizInProgress();
  }

  initiateQuiz(): void {
    this.updateActionButtonState('Next question');
    this.storageSVC.setQuizInProgress();
    this.runQuestionTimer();
  }

  toggleNextQuestion(): void {
    if (this.questionIndex === this.questionLimit - 1) return this.confirmQuizCompleted();
    this.incrementQuestionIndex();
    this.storeSelectedAnswer();
    this.runQuestionTimer();
  }

  setSelectedAnswer(data: AnswerEmit): void {
    this.markAnswerAsCurrentlySelected(data.answer, data.btnRef);
    this.selectedOption = data.answer;
  }

  toggleQuizComplete(): void {
    if (this.quizCompleted) {
      return this.closeQuizAndReturnHome();
    }
    this.setQuizAsCompleted();
    this.updateActionButtonState('Return home');
    this.totalQuizScore();
    this.saveQuizResultToProfile({
      show: this.title,
      season: this.seasonParam,
      date: new Date().toJSON(),
      score: this.userQuizResult,
      showId: this.showIdParam
    });
  }

  resetAnswer(data: AnswerEmit): void {
    this.markAnswerAsCurrentlySelected(data.answer, data.btnRef);
  }

  private setQuizAsCompleted(): void {
    this.quizCompleted = true;
  }

  private runQuestionTimer(): void {
    this.quizTimer$ = this.quizSVC.quizQuestionTimer$();
  }

  private updateActionButtonState(state: QuizButton): void {
    this.quizBtnState = state;
  }

  private setSeasonDataInStorage(data: ShowCollection[]): void {
    if (data.length) this.storageSVC.setSeasons(this.showIdParam!, data);
  }

  private setQuestionRange(questions: Questions[]): void {
    this.questionLimit = questions.length;
  }

  private storeQuizAnswers(season: IndividualSeason): void {
    this.seasonQuizAnswers = season!.quiz.map((data: QuizItem) => data.answer);
  }

  private incrementQuestionIndex(): void {
    this.questionIndex++;
  }

  private storeSelectedAnswer(): void {
    this.userAnswerStore = [...this.userAnswerStore, this.selectedOption];
    this.selectedOption = '';
  }

  private closeQuizAndReturnHome(): void {
    this.storageSVC.removeQuizInProgress();
    this.router.navigateByUrl(Paths.HOME);
  }

  private confirmQuizCompleted(): void {
    this.storeSelectedAnswer();
    this.updateActionButtonState('View my result');
    this.quizTimer$ = of({ time: 0, isTimeUp: true });
  }

  private totalQuizScore(): void {
    let totalScore = 0;
    for (let i = 0; i < this.seasonQuizAnswers.length; i++) {
      if (this.seasonQuizAnswers[i] === this.userAnswerStore[i]) ++totalScore;
    }
    this.userQuizResult = +((totalScore / this.seasonQuizAnswers.length) * 100).toPrecision(2);
  }

  private getShowCollectionAndSetInStorage(): void {
    const seasonData: ShowCollection[] = this.storageSVC.getSeasons(this.showIdParam!)!;
    if (seasonData) {
      this.configureQuizData(seasonData);
      return;
    }
    this.quizSVC
      .getSeasonQuizData$(this.showIdParam!)
      .pipe(
        take(1),
        tap((seasons: ShowCollection[]) => {
          this.setSeasonDataInStorage(seasons);
          this.configureQuizData(seasons);
        })
      )
      .subscribe();
  }

  private configureQuizData(showCollection: ShowCollection[]) {
    const [selectedSeason] = showCollection.map((collection: ShowCollection) => {
      return collection.seasons.find(
        (season: IndividualSeason) => season.season === +this.seasonParam
      );
    });

    this.storeQuizAnswers(selectedSeason);

    this.seasonQuizData$ = of(
      selectedSeason.quiz.map((data: QuizItem) => {
        return {
          question: data.question,
          options: [...data.alts, data.answer].sort(() => Math.random() - 0.5) // Randomise order of options
        };
      })
    ).pipe(
      tap((questions: Questions[]) => {
        (this.numberOfQuestions = selectedSeason.quiz.length), this.setQuestionRange(questions);
      })
    );
  }

  private saveQuizResultToProfile(achievement: Achievement): void {
    this.userSVC.saveUsersQuizResults(achievement);
  }

  private markAnswerAsCurrentlySelected(
    currentAnswer: string,
    btnRef: QueryList<ElementRef<HTMLButtonElement>>
  ) {
    if (btnRef) {
      btnRef.forEach((btn: ElementRef<HTMLButtonElement>) => {
        btn.nativeElement.classList.remove('btn-quiz-attempt');
        if (btn.nativeElement.textContent.trim() === currentAnswer) {
          btn.nativeElement.classList.add('btn-quiz-attempt');
        }
      });
    }
  }
}
