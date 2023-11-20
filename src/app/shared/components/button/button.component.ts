 import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

type ButtonType = 'button' | 'submit';

@Component({
  selector: 'bs-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnChanges {
  @Input() type: ButtonType = 'button';
  @Input() value: string = '';

  ngOnChanges(changes: SimpleChanges): void {
      console.log(`%c CHANGES `, `background: #a1f2aa; color: #333;`, changes)
      console.log(`%c VAL `, `background: #7AE216; color: black;`, this.value)
  }


}
