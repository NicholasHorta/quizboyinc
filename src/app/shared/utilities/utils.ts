import { Observable, throwError } from 'rxjs';

export function generateArrayFromNumber(num: number | string, increment: boolean = true): number[] {
  if (typeof num === 'string') num = +num;
  if (increment) return Array.from(Array(num).keys()).map(i => i + 1);
  return Array.from(Array(num).keys());
}

//> Rename to something more appropriate
export function errorHandler(message: string): Observable<never> {
  return throwError(() => new Error(message));
}

export function RandomUsernameCreation(): string {
  const random = (arg: number) => Math.floor(Math.random() * arg);
  const base = 1000000;
  const letter = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
  const title = ['Android', 'Ghost', 'Droid', 'Robot', 'Cyborg', 'Alien', 'Martian', 'Plutonian'];
  return `${title[random(title.length)]}-${letter[random(letter.length)]}${
    letter[random(letter.length)]
  }${random(base)}`;
}
