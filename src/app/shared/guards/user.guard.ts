import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Paths, ToastType } from '@app/models/shared/global.models';
import { UserService } from '@app/services/auth/user.service';
import { Observable, map, tap } from 'rxjs';
import { ToastService } from '../services/toast.service';

export function userGuard(): CanActivateFn {
  return (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> => {
    const userSVC = inject(UserService);
    const router = inject(Router);
    const toast = inject(ToastService);
    return userSVC.user$.pipe(
      map(user => !!user),
      tap(isUser => {
        if (!isUser) {
          router.navigate([Paths.EMPTY]);
          toast.emitToastNotification(3000, 'Please sign in to view this page.', ToastType.INFO);
        }
      })
    );
  };
}
