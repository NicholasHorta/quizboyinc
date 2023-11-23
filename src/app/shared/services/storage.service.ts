import { Injectable } from '@angular/core';
import { SeasonsWithId, ShowWithId } from '@app/models/quiz.models';
import { StorageKeys } from '@app/models/storage.models';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  setQuizInit(): void {
    localStorage.setItem(StorageKeys.IN_PROGRESS, 'true');
  }

  removeQuizInit(): void {
    this.removeItem(StorageKeys.IN_PROGRESS);
  }

  setShows(value: ShowWithId[]): void {
    localStorage.setItem(StorageKeys.SHOWS, this.toJSON(value));
  }

  setSeasons(id: string, value: SeasonsWithId[]): void {
    const key = `${id}_${StorageKeys.SEASONS}`;
    localStorage.setItem(key, this.toJSON(value));
  }

  getShows(): ShowWithId[] | undefined {
    if (!localStorage.getItem(StorageKeys.SHOWS)) return;
    return JSON.parse(localStorage.getItem(StorageKeys.SHOWS)!);
  }

  getSeasons(id: string): SeasonsWithId[] | undefined {
    const key = `${id}_${StorageKeys.SEASONS}`;
    if (!localStorage.getItem(key)) return;
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
