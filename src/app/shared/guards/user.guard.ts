import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { AuthService } from '@app/services/auth/auth.service';
import { Observable, map } from 'rxjs';

export function userGuard(): CanActivateFn {
  return (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> => {
    const authSVC = inject(AuthService);
    return authSVC.user$.pipe(map(user => !!user));
    // return of(true);
  };
}
