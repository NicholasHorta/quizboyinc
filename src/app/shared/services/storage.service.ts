import { Injectable } from '@angular/core';
import { ShowWithId } from '@app/models/quiz.models';
import { StorageKeys } from '@app/models/storage.models';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  //* FIX THIS TYPE
  getItem(key: string): any {
    if (!localStorage.getItem(key)) return;
    return JSON.parse(localStorage.getItem(key)!);
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  wipeStorage(): void {
    localStorage.clear();
  }

  getShows(): ShowWithId[] | undefined {
    if (!localStorage.getItem(StorageKeys.SHOWS)) return;
    return JSON.parse(localStorage.getItem(StorageKeys.SHOWS)!);
  }

  getSeasons(id: string): ShowWithId[] | undefined {
    const key = `${id}_${StorageKeys.SEASONS}`;
    if (!localStorage.getItem(key)) return;
    return JSON.parse(localStorage.getItem(key)!);
  }
}
