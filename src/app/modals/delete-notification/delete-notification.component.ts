import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Paths } from '@app/models/shared/global.models';
import { ModalDirective } from '@app/shared/directives/modal/modal.directive';
import { Observable } from 'rxjs';

@Component({
  selector: 'bs-delete-notification',
  standalone: true,
  imports: [ModalDirective, AsyncPipe, NgIf],
  templateUrl: './delete-notification.component.html',
  styleUrls: ['./delete-notification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DeleteNotificationComponent {
  @Input() isModalOpen$: Observable<boolean>
  path = Paths.PROFILE;
}
