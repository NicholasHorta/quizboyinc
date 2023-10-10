import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationLinks } from '../../interfaces/core.model';
import { AComponent } from '@app/shared/components/a/a.component';

enum Paths {
  STATIC = 'info',
  AUTH = 'auth',
  HOME = 'shows',
  PROFILE = 'profile'
}

@Component({
  selector: 'quiz-navigation',
  standalone: true,
  imports: [CommonModule, AComponent],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  links: NavigationLinks[]  = [
    {label: 'Shows', path: `${Paths.HOME}`},
    {label: 'Profile', path: `${Paths.PROFILE}`},
    {label: 'About', path: `${Paths.STATIC}/about`},
    {label: 'Contact', path: `${Paths.STATIC}/contact`}
  ];
}