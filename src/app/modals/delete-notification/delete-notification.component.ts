import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Paths } from '@app/models/shared/global.models';
import { ModalDirective } from '@app/shared/directives/modal/modal.directive';
import { Observable } from 'rxjs';

@Component({
  selector: 'bs-delete-notification',
  standalone: true,
  imports: [ModalDirective, AsyncPipe, NgIf, MatIconModule],
  templateUrl: './delete-notification.component.html',
  styleUrls: ['../../shared/directives/modal/modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DeleteNotificationComponent {
  @Input() isModalOpen$: Observable<boolean>
  path = Paths.PROFILE;
}
