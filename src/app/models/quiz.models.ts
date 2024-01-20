import { ElementRef, QueryList } from "@angular/core";

export interface Show {
  title: string;
  info: string;
  image: string;
  seasons: number;
  preface: string;
}

export interface ShowCollection {
  showId: string;
  seasons: IndividualSeason[];
}

export interface IndividualSeason {
  image: string;
  season: number;
  quiz: QuizItem[];
}

export interface QuizItem {
  question: string;
  answer: string;
  alts: string[];
}
export interface Questions {
  question: string;
  options: string[];
}

export interface Timer {
  time: number;
  isTimeUp: boolean;
}

export interface AchievementCheck {
  season: string;
  show: string;
}

export interface AnswerEmit {
  answer: string;
  btnRef: QueryList<ElementRef<HTMLButtonElement>>;
}


export type ShowWithId = Show & FirestoreId
export type ShowCollectionWithId = ShowCollection & FirestoreId

interface FirestoreId {
  id: string;
}
