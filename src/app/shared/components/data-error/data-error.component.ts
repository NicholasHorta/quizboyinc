import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastType } from '@app/models/shared/global.models';
import { ToastService } from '@app/shared/services/toast.service';

@Component({
  selector: 'bs-data-error',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './data-error.component.html',
  styleUrls: ['./data-error.component.scss']
})
export class DataErrorComponent implements OnInit {
  @Input() route: string;
  @Input() message: string;

  ngOnInit(): void {
      this.toastSVC.emitToastNotification(3000, this.message, ToastType.ERROR)
  }

  constructor(private toastSVC: ToastService) {}
}
