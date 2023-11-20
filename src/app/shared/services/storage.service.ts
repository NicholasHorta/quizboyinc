import { Injectable } from '@angular/core';
import { Seasons, ShowWithId } from '@app/models/quiz.models';
import { StorageKeys } from '@app/models/storage.models';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  setItem(key: string, value: string): void {
    localStorage.setItem(key, this.toJSON(value));
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

  setSeasons(id: string, value: Seasons[] | any): void {
    const key = `${id}_${StorageKeys.SEASONS}`;
    localStorage.setItem(key, this.toJSON(value));
  }

  getShows(): ShowWithId[] | undefined {
    if (!localStorage.getItem(StorageKeys.SHOWS)) return;
    return JSON.parse(localStorage.getItem(StorageKeys.SHOWS)!);
  }

  getSeasons(id: string): Seasons[] | undefined {
    const key = `${id}_${StorageKeys.SEASONS}`;
    if (!localStorage.getItem(key)) return;
    return JSON.parse(localStorage.getItem(key)!);
  }

  private toJSON(value: any): string {
    return JSON.stringify(value);
  }
}
