import { AsyncPipe, NgClass, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Toast, ToastType } from '@app/models/shared/global.models';
import { ToastDirective } from '@app/shared/directives/toast/toast.directive';
import { ToastService } from '@app/shared/services/toast.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'bs-toast',
  standalone: true,
  imports: [ToastDirective, AsyncPipe, NgIf, MatIconModule, NgClass, NgSwitch, NgSwitchCase],
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  constructor(private toastSVC: ToastService) {}

  toast$: Observable<Toast>;
  toastType =  ToastType;

  ngOnInit(): void {
    this.toast$ = this.toastSVC.toast$;
  }

  acknowledgeToast() {
    this.toastSVC.acknowledgeToast();
  }
}
