import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { UserService } from '@app/services/auth/user.service';
import { Observable, map } from 'rxjs';

export function userGuard(): CanActivateFn {
  return (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> => {
    const userSVC = inject(UserService);
    return userSVC.user$.pipe(map(user => !!user));
    // return of(true);
  };
}
