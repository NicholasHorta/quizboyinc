import { Component, OnInit } from '@angular/core';
import { ShowWithId } from '@app/models/quiz.models';
import { StorageKeys } from '@app/models/storage.models';
import { QuizService } from '@app/services/quiz/quiz.service';
import { StorageService } from '@app/shared/services/storage.service';
import { Observable, of, take, tap } from 'rxjs';

@Component({
  selector: 'bs-quiz-shows',
  templateUrl: './quiz-shows.component.html',
  styleUrls: ['./quiz-shows.component.scss']
})
export class QuizShowsComponent implements OnInit {
  constructor(private quizSVC: QuizService, private storageSVC: StorageService) {}

  shows$: Observable<ShowWithId[]> = new Observable();

  ngOnInit(): void {
    this.getDataFromStorage();
  }


  //? Bridge item??
  private getDataFromStorage(): void {
    const data = this.storageSVC.getItem(StorageKeys.SHOWS);
    if (!data) {
      this.quizSVC.shows$
        .pipe(
          take(1),
          tap(shows => this.storageSVC.setItem('shows', shows))
        )
        .subscribe(data => (this.shows$ = of(data) as Observable<ShowWithId[]>));
    }
    this.shows$ = of(data) as Observable<ShowWithId[]>;
  }
}
