import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() value: string = '';
  @Input() disabled: boolean = false;
  @Output() routeChange: EventEmitter<string> = new EventEmitter<string>();

  clickEvent(route: string): void {
    this.routeChange.emit(route);
  }
}
