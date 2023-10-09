import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'quiz-a',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent {
  @Input() href: string = '';
  @Input() text: string = '';
}
