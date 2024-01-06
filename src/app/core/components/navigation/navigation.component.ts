import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationLinks } from '../../../models/core.model';
import { Paths } from '@app/models/shared/global.models';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'bs-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  links: NavigationLinks[] = [
    { label: 'Shows', path: `${Paths.HOME}` },
    { label: 'Profile', path: `${Paths.PROFILE}` },
    { label: 'About', path: `${Paths.STATIC}/about` },
    { label: 'Contact', path: `${Paths.STATIC}/contact` }
  ];

}
