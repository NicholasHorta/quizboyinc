import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Paths } from '@app/models/shared/global.models';
import { UserService } from '@app/services/auth/user.service';
import { ModalDirective } from '@app/shared/directives/modal/modal.directive';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'bs-delete-notification',
  standalone: true,
  imports: [ModalDirective, AsyncPipe, NgIf],
  templateUrl: './delete-notification.component.html',
  styleUrls: ['./delete-notification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DeleteNotificationComponent {
  isModalOpen$: Observable<boolean>
  path = Paths.PROFILE;

  constructor(private userSVC: UserService) {}

  ngOnInit(): void {
    this.isModalOpen$ = of(true);
    this.userSVC.deleteUserProfile$()
  }
}
