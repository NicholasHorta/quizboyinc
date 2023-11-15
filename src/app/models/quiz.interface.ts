interface Show {
  title: string;
  info: string;
  image: string;
  seasons: number;
}

interface Seasons {
  seasons: Season[];
  showId: string;
}

interface Season {
  image: string;
  season: string;
  quiz: Question[];
}

interface Question {
  question: string;
  answer: string;
  decoys: string[];
}

type ShowWithId = Show & FirestoreId

interface FirestoreId {
  id: string;
}


export {ShowWithId, Show, Seasons, Season, Question}
