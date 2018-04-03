import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class BackAuthGuardService {

 
constructor(private router:Router,private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const url: string = state.url;
    return Observable.create(observer => {
    if(  this.authService.isLoggedIn()){
      observer.next(false);
      this.router.navigate(['/']);
      observer.complete();
    }else{
      observer.next(true);
      observer.complete();
    }
  });
}

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.canActivate(route, state);
  }

}