import { Component, OnInit } from '@angular/core';
import { Show } from '@app/models/quiz.interface';
import { QuizService } from '@app/services/quiz/quiz.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-quiz-shows',
  templateUrl: './quiz-shows.component.html',
  styleUrls: ['./quiz-shows.component.scss']
})
export class QuizShowsComponent implements OnInit {

  constructor(private quizSVC: QuizService) { }

  shows$: Observable<Show[]> = this.quizSVC.getTestCollection();

  ngOnInit(): void {

  }
}
