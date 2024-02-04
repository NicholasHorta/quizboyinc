import { Injectable } from '@angular/core';
import { Observable, fromEvent, map, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewportService {
  viewportSizeEmission$(): Observable<number> {
    return fromEvent(window, 'resize').pipe(map(window => (window.target as Window).innerWidth), tap(i => console.log('%c < Tap Log > ', 'color: #74ffaa; border: 2px solid #74ffaa; border-radius: 8px;', i)));
  }

  getViewportSize(): number {
    return window.innerWidth;
  }
}
