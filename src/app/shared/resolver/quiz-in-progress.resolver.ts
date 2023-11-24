// import { Injectable } from '@angular/core';
// import {
//   Router, Resolve,
//   RouterStateSnapshot,
//   ActivatedRouteSnapshot
// } from '@angular/router';
// import { Observable, of } from 'rxjs';
// import { StorageService } from '../services/storage.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class PlayInitiatorResolver implements Resolve<boolean> {
//   constructor(private storageSVC: StorageService, private router: Router){}
//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
//     if(!this.storageSVC.){
//       this.router.navigate(['']);
//     }
//     return of(true);
//   }
// }
