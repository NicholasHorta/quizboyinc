import { Injectable } from '@angular/core';
import { ShowWithId } from '@app/models/quiz.models';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  setItem(key: string, value: string): void {
    JSON.stringify(localStorage.setItem(key, value));
  }

  getItem(key: string): string | number | Object | [] | undefined {
    if(!localStorage.getItem(key)) return;
    return JSON.parse(localStorage.getItem(key)!);
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  wipeStorage(): void {
    localStorage.clear();
  }

  getShows(key: string): ShowWithId[] | undefined {
    if(!localStorage.getItem(key)) return;
    return JSON.parse(localStorage.getItem(key)!);
  }
}
