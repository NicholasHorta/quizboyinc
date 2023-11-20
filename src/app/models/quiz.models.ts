export interface Show {
  title: string;
  info: string;
  image: string;
  seasons: number;
}

export interface Seasons {
  showId: string;
  seasons: Season[];
}

export interface Season {
  image: string;
  season: string;
  quiz: Question[];
}

export interface Question {
  question: string;
  answer: string;
  decoys: string[];
}

export type ShowWithId = Show & FirestoreId
export type SeasonsWithId = Seasons & FirestoreId

interface FirestoreId {
  id: string;
}


