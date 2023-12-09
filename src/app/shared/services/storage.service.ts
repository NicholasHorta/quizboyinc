import { Injectable } from '@angular/core';
import { ShowCollection, ShowWithId } from '@app/models/quiz.models';
import { StorageKeys } from '@app/models/storage.models';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  setQuizInProgress(): void {
    localStorage.setItem(StorageKeys.IN_PROGRESS, 'true');
  }

  removeQuizInProgress(): void {
    this.removeItem(StorageKeys.IN_PROGRESS);
  }

  setShows(value: ShowWithId[]): void {
    localStorage.setItem(StorageKeys.SHOWS, this.toJSON(value));
  }

  setSeasons(id: string, value: ShowCollection[]): void {
    const key = `${id}_${StorageKeys.SEASONS}`;
    localStorage.setItem(key, this.toJSON(value));
  }

  isQuizInProgress(): boolean {
    return !!localStorage.getItem(StorageKeys.IN_PROGRESS);
  }

  getShows(): ShowWithId[] | undefined {
    if (!localStorage.getItem(StorageKeys.SHOWS)) return undefined;
    return JSON.parse(localStorage.getItem(StorageKeys.SHOWS)!);
  }

  getSeasons(id: string): ShowCollection[] | undefined {
    const key = `${id}_${StorageKeys.SEASONS}`;
    if (!localStorage.getItem(key)) return undefined;
    return JSON.parse(localStorage.getItem(key)!);
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  wipeStorage(): void {
    localStorage.clear();
  }

  private toJSON(value: any): string {
    return JSON.stringify(value);
  }
}
