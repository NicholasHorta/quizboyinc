import { Injectable } from '@angular/core';
import { ConsoleMsgType, Emoji } from '@app/models/shared/global.models';


@Injectable({
  providedIn: 'root'
})
export class LogService {
  emit(type: ConsoleMsgType, message: string) {
    return console[type](Emoji[type], message, Emoji[type]);
  }
}
