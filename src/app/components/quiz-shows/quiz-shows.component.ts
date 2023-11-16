import { Component, OnInit } from '@angular/core';
import { ShowWithId } from '@app/models/quiz.interface';
import { QuizService } from '@app/services/quiz/quiz.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'bs-quiz-shows',
  templateUrl: './quiz-shows.component.html',
  styleUrls: ['./quiz-shows.component.scss']
})
export class QuizShowsComponent implements OnInit {

  constructor(private quizSVC: QuizService) { }

  shows$: Observable<ShowWithId[]> = this.quizSVC.shows;

  ngOnInit(): void {

  }
}
