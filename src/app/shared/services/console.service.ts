import { Injectable } from '@angular/core';

type ConsoleMsgType = 'info' | 'warn' | 'error' | 'log';

@Injectable({
  providedIn: 'root'
})

export class ConsoleService {
  log(type: ConsoleMsgType, message: string){
    return console[type](message);
  }
}
