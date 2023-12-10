import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShowWithId } from '@app/models/quiz.models';
import { GetParam, Paths } from '@app/models/shared/global.models';
import { StorageService } from '@app/shared/services/storage.service';
import { GenerateArrayFromNumber, LogErrorMessage } from '@app/shared/utilities/utils';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'bs-quiz-collections',
  templateUrl: './quiz-collections.component.html',
  styleUrls: ['./quiz-collections.component.scss']
})
export class QuizCollectionsComponent implements OnInit {
  constructor(
    private storageSVC: StorageService,
    private activeRoute: ActivatedRoute,
    private route: Router
  ) {}

  selectedShow$: Observable<ShowWithId>;
  numberOfSeasons: number[] = [];
  selectedSeason: number = 0;
  private showIdParam: GetParam = null;

  ngOnInit(): void {
    this.showIdParam = this.activeRoute.snapshot.paramMap.get('id');
    this.getSelectedShowFromStorage();
  }

  setAttemptBtnWithSelectedSeason(season: number): void {
    this.selectedSeason = season;
  }

  navigateToQuizAttempt(data: ShowWithId): void {
    const route = [Paths.HOME, data.id, this.selectedSeason];
    this.route.navigate(route, {
      queryParams: { title: data.title }
    });
  }

  private getSelectedShowFromStorage(): void {
    const show = this.storageSVC
      .getShows()
      ?.find((show: ShowWithId) => show.id === this.showIdParam);

    if (!show) {
      LogErrorMessage(`No document found for: ${this.showIdParam}`);
      return;
    }

    this.setSelectedShowData(show);
  }

  private setSelectedShowData(show: ShowWithId): void {
    this.numberOfSeasons = GenerateArrayFromNumber(show.seasons);
    this.selectedShow$ = of(show);
  }
}
