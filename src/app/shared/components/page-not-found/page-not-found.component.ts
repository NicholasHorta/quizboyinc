import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Paths } from '@app/models/shared/global.models';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'bs-page-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {
  Paths = Paths
}
