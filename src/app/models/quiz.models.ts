export interface Show {
  title: string;
  info: string;
  image: string;
  seasons: number;
}

export interface Seasons {
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

export type ShowWithId = Show & FirestoreId
export type SeasonsWithId = Seasons & FirestoreId

interface FirestoreId {
  id: string;
}


