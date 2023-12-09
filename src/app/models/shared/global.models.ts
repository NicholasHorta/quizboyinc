export type GetParam = string | null

export type QuizButton = 'Next' | 'Complete quiz' | 'Begin' | 'Return home';

export enum Paths {
  HOME = 'shows',
  STATIC = 'info',
  AUTH = 'auth',
  PROFILE = 'profile',
  REGISTER = 'register',
  SIGN_IN = 'sign-in',
}

export type ConsoleMsgType = 'info' | 'warn' | 'error' | 'log';

export enum Emoji {
  info = '🔵',
  warn = '🟡',
  error = '🛑',
  log = '🟢'
}

export type DbCollectionTypes = 'shows' | 'seasons' | 'users';
