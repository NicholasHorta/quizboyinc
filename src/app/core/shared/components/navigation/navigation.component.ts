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
    {label: 'Shows', path: ''},
    {label: 'About', path: 'about'},
    {label: 'Contact', path: 'about/contact'}
  ];
}
