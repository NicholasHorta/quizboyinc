import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Paths } from '@app/models/shared/global.models';

@Component({
  selector: 'bs-data-error',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './data-error.component.html',
  styleUrls: ['./data-error.component.scss']
})
export class DataErrorComponent {
  paths = Paths;
}
