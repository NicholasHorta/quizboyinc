export interface UserData {
  avatar: string;
  username: string;
  email: string;
  uid: string;
  role: string;
  created: Date;
  achievements: Achievements[];
}

export interface Achievements {
  show: string;
  score: string;
  image: string;
  date: Date;
}
