export interface NavigationLinks {
  label: string;
  path: string;
}

export interface TimestampSet {
  session: number;
  future: number;
}

export type PortalType = 'Sign in' | 'Register';
