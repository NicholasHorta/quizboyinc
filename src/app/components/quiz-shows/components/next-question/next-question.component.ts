import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'bs-next-question',
  templateUrl: './next-question.component.html',
  styleUrls: ['./next-question.component.scss']
})
export class NextQuestionComponent {
  @Input() quizBtnState: string;
  @Output() emitToggleNext: EventEmitter<void> = new EventEmitter<void>();
  @Output() emitToggleQuizComplete: EventEmitter<void> = new EventEmitter<void>();

  onEmitToggleNext() {
    this.emitToggleNext.emit();
  }

  onEmitToggleQuizComplete() {
    this.emitToggleQuizComplete.emit();
  }
}
