import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Show, ShowWithId } from '@app/models/quiz.models';
import { GetParam } from '@app/models/shared/global.models';
import { StorageService } from '@app/shared/services/storage.service';
import { generateArrayFromNumber } from '@app/shared/utilities/utils';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'bs-quiz-collections',
  templateUrl: './quiz-collections.component.html',
  styleUrls: ['./quiz-collections.component.scss']
})
export class QuizCollectionsComponent implements OnInit {
  constructor(
    private storageSVC: StorageService,
    private activeRoute: ActivatedRoute
  ) {}

  collection$: Observable<Show> = new Observable<Show>();
  numberOfSeasons: number[] = [];
  selectedSeason: number = 0;
  showIdParam: GetParam = null;

  ngOnInit(): void {
    this.showIdParam = this.activeRoute.snapshot.paramMap.get('id');
    this.getDataFromStorage();
  }

  setAttemptButtonData(season: number): void {
    this.selectedSeason = season;
  }

  private getDataFromStorage(): void {
    const data = this.storageSVC.getShows();
    data?.find((show: ShowWithId) => {
      show.id === this.showIdParam ? this.collection$ = of(show) : of([]);
      this.numberOfSeasons = generateArrayFromNumber(show.seasons);
    });
  }
}
