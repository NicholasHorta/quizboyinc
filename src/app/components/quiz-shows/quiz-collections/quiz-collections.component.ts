import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Show } from '@app/models/quiz.interface';
import { QuizService } from '@app/services/quiz/quiz.service';
import { ConsoleService } from '@app/shared/services/console.service';
import { errorHandler, generateArrayFromNumber } from '@app/shared/utilities/utils';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Component({
  selector: 'quiz-quiz-collections',
  templateUrl: './quiz-collections.component.html',
  styleUrls: ['./quiz-collections.component.scss']
})
export class QuizCollectionsComponent implements OnInit {
  constructor(
    private quizSVC: QuizService,
    private activeRoute: ActivatedRoute,
    private consoleSVC: ConsoleService
  ) {}

  collection$: Observable<Show> = new Observable<Show>();
  seasonsNumber: number[] = [];

  ngOnInit(): void {
    const showId = this.activeRoute?.snapshot?.paramMap?.get('show');
    this.collection$ = this.quizSVC.getSeasons(showId ?? '').pipe(
      tap(seasons => {
        this.seasonsNumber = generateArrayFromNumber(seasons.seasons);
      }),
      catchError((seasons) => errorHandler(`Cannot retrieving data for show: ${showId}`))
    );
  }
}
