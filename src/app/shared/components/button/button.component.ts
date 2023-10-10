import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

type ButtonType = 'button' | 'submit';

@Component({
  selector: 'quiz-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() type: ButtonType = 'button';
  @Input() task: string = '';
}
