import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

type ButtonType = 'button' | 'submit';
type ButtonClass = 'primary' | 'warning' | 'danger' | 'success' | 'info';

@Component({
  selector: 'quiz-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() type: ButtonType = 'button';
  @Input() status: ButtonClass = 'primary';
}
