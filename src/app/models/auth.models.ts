export interface UserData {
  avatar: string;
  username: string;
  email: string;
  uid: string;
  role: string;
  created: Date;
  achievements: Achievement[];
}

export interface Achievement {
  show: string;
  score: number;
  season: string;
  date: Date;
}
