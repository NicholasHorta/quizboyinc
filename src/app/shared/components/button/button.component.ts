import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type ButtonType = 'button' | 'submit';

@Component({
  selector: 'bs-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() type: ButtonType = 'button';


}
