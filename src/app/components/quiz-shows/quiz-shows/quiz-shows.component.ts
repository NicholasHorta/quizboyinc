import { Component, OnInit } from '@angular/core';
import { ShowWithId } from '@app/models/quiz.models';
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

  shows$: Observable<ShowWithId[]>;

  ngOnInit(): void {
    this.getShowsAndSetInStorage();
  }

  private setShowDataInStorage(shows: ShowWithId[]): void {
    this.storageSVC.setShows(shows);
  }

  private getShowsAndSetInStorage(): void {
    const shows = this.storageSVC.getShows();
    if (shows) {
      this.shows$ = of(shows);
      return;
    }

    this.quizSVC.getShowsFromDB$()
      .pipe(
        take(1),
        tap((shows: ShowWithId[]) => {
          this.setShowDataInStorage(shows)
          this.shows$ = of(shows)
        }),
      )
      .subscribe();
  }
}
