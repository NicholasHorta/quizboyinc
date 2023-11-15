import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Seasons } from '@app/models/quiz.interface';
import { QuizService } from '@app/services/quiz/quiz.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'quiz-quiz-collections',
  templateUrl: './quiz-collections.component.html',
  styleUrls: ['./quiz-collections.component.scss']
})
export class QuizCollectionsComponent implements OnInit {

  constructor(private quizSVC: QuizService, private activeRoute: ActivatedRoute) { }

  seasons$: Observable<Seasons> = new Observable<Seasons>();

  ngOnInit(): void {
    const showId = this.activeRoute.snapshot.paramMap.get('show')
    if(!showId) return
    this.seasons$ = this.quizSVC.getSeasons(showId)
  }

}
