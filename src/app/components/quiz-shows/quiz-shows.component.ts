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
    this.getDataAndSetInStorage();
  }

  private getDataAndSetInStorage(): void {
    const showData = this.storageSVC.getShows();
    if (showData) {
      this.shows$ = of(showData);
      return;
    }

    this.quizSVC.shows$
      .pipe(
        take(1),
        tap((shows: ShowWithId[]) => this.setShowDataInStorage(shows)),
        tap(data => (this.shows$ = of(data)))
      )
      .subscribe();
  }

  private setShowDataInStorage(shows: ShowWithId[]): void {
    this.storageSVC.setShows(shows);
  }
}
