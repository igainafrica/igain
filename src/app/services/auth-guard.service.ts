import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot,Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthService} from './auth.service'


@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor(private router:Router,private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return Observable.create(observer => {
      this.authService.getCurrentUser().subscribe(user => {
        if (user) {
          observer.next(true);
          observer.complete();
        } else {
          observer.error(false);
          this.router.navigate(['/sign-in']);
          observer.complete();
        }
      }, error => {
        observer.next(false);
        this.router.navigate(['/sign-in']);
        observer.complete();
      });
    });
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.canActivate(route, state);
  }

}
