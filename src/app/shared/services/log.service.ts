import { Injectable } from '@angular/core';
import { ConsoleMsgType, LogEmoji } from '@app/models/shared/global.models';


@Injectable({
  providedIn: 'root'
})
export class LogService {
  emit(type: ConsoleMsgType, message: string) {
    return console[type](LogEmoji[type], message, LogEmoji[type]);
  }
}
