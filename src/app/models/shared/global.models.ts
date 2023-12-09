export type GetParam = string | null

export type QuizButton = 'Next' | 'Complete quiz' | 'Begin' | 'Return home';

export enum Paths {
  EMPTY = '',
  HOME = 'shows',
  STATIC = 'info',
  AUTH = 'auth',
  PROFILE = 'profile',
  REGISTER = 'register',
  SIGN_IN = 'sign-in',
  LOGIN = 'login',
  ACHIEVEMENTS = 'achievements',
  ABOUT = 'about',
  CONTACT = 'contact',
}

export type ConsoleMsgType = 'info' | 'warn' | 'error' | 'log';

export enum LogEmoji {
  info = '🔵',
  warn = '🟡',
  error = '🛑',
  log = '🟢'
}

export enum DbRootKey {
  USERS = 'users',
  SHOWS = 'shows',
  SEASONS = 'seasons',
  LOGS = 'logs',
}
