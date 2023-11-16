import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '@app/services/quiz/quiz.service';

@Component({
  selector: 'bs-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.scss']
})
export class QuizQuestionComponent implements OnInit {

  confirmQuizInit: boolean = false;

  constructor(private quizSVC: QuizService, private activeRoute: ActivatedRoute) { }


  ngOnInit(): void {
    const showId = this.activeRoute?.snapshot?.paramMap?.get('show');
    this.quizSVC.getSeasonQuizData(showId ?? '').subscribe(data => console.log(data));
  }

  initiateQuiz(): void {
    this.confirmQuizInit = true;
  }

}
