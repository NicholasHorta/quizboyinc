import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Paths } from '@app/models/shared/global.models';
import { ModalDirective } from '@app/shared/directives/modal/modal.directive';
import { ModalService } from '@app/shared/services/modal.service';

@Component({
  selector: 'bs-modal',
  standalone: true,
  imports: [ModalDirective],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent implements OnInit {
  constructor(private modalSVC: ModalService) {}
  isModalOpen = false;
  path = Paths.PROFILE;

  ngOnInit(): void {
    this.isModalOpen = this.modalSVC.isModalOpen;
  }
}
