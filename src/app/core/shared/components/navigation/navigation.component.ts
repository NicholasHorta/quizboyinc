import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationLinks } from '../../interfaces/core.model';
import { AComponent } from '@app/shared/components/a/a.component';

@Component({
  selector: 'quiz-navigation',
  standalone: true,
  imports: [CommonModule, AComponent],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  links: NavigationLinks[]  = [
    {label: 'Home', path: ''},
    {label: 'About', path: ''},
    {label: 'Sign in/Register', path: ''},
  ];
}
