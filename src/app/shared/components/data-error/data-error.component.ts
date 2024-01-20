import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'bs-data-error',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './data-error.component.html',
  styleUrls: ['./data-error.component.scss']
})
export class DataErrorComponent {
  @Input() route: string;
  @Input() message: string;

}
