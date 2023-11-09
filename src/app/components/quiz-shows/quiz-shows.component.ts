import { Component, OnInit } from '@angular/core';
import { QuizService } from '@app/services/quiz/quiz.service';

@Component({
  selector: 'app-quiz-shows',
  templateUrl: './quiz-shows.component.html',
  styleUrls: ['./quiz-shows.component.scss']
})
export class QuizShowsComponent implements OnInit {

  constructor(private quizSVC: QuizService) { }

  ngOnInit(): void {
    this.quizSVC.getTestCollection().subscribe((data) => {
      console.log(`%c dd `, `background: cyan; color: black;`, data)
    })
  }
}
