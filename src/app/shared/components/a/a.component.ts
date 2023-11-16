import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'bs-a',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent {
  @Input() link: string[] = [];
  @Input() text: string = '';
}
