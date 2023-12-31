import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Paths } from '@app/models/shared/global.models';

@Component({
  selector: 'bs-logo',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
  Paths = Paths;
}
