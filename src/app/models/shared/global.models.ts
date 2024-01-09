export type GetParam = string | null;

export type QuizButton = 'Next question' | 'Complete quiz' | 'Begin' | 'Return home';

export enum Paths {
  EMPTY = '',
  HOME = 'shows',
  STATIC = 'info',
  AUTH = 'auth',
  PROFILE = 'profile',
  REGISTER = 'register',
  SIGN_IN = 'sign-in',
  EDIT = 'edit',
  ACHIEVEMENTS = 'achievements',
  ABOUT = 'about',
  CONTACT = 'contact',
  RESET_PW = 'reset-password'
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
  LOGS = 'logs'
}

export interface Toast {
  isVisible: boolean;
  message: string;
  displayStyle: ToastType;
}

export enum ToastType {
  SUCCESS = 'success',
  ERROR = 'error',
  INFO = 'info',
  WARNING = 'warning'
}
