import { Injectable } from '@angular/core';
import { Toast, ToastType } from '@app/models/shared/global.models';
import { Subject, delay, take, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toast: Subject<Toast> = new Subject();
  toast$ = this.toast.asObservable();

  emitToastNotification(delayTime: number, message: string, displayStyle: ToastType): void {
    this.toast.next({ isVisible: true, message, displayStyle });
    timer(delayTime)
      .pipe(take(1), delay(delayTime))
      .subscribe(() => this.toast.next({ isVisible: false, message: '', displayStyle: ToastType.INFO }));
  }

  acknowledgeToast(): void {
    this.toast.next({ isVisible: false, message: '', displayStyle: ToastType.INFO });
  }
}

//: Both emitToast methods achieve the same result of emitting a toast message after a specified delay. However, the second implementation using timer and pipe from RxJS offers more flexibility and control.

//: The second implementation using timer allows you to easily handle the delay and cancellation of the toast message. It provides options to delay the emission of the toast message and also cancel it if needed. Additionally, it leverages the power of reactive programming with RxJS, allowing you to compose complex asynchronous operations easily.

//: On the other hand, the first implementation using setTimeout is simpler and may be sufficient for basic use cases where you only need a fixed delay. It is a more straightforward approach without the need for additional dependencies.
