import { Observable, throwError } from 'rxjs';

export function generateArrayFromNumber(num: number | string, increment: boolean = true): number[] {
  if (typeof num === 'string') num = +num;
  if (increment) return Array.from(Array(num).keys()).map(i => i + 1);
  return Array.from(Array(num).keys());
}

export function errorHandler(message: string): Observable<never> {
  return throwError(() => new Error(message));
}
