import {Injectable, Inject} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {map, catchError} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{

  constructor(private router: Router) { }
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const url = req.url.toLowerCase();

    if (url.startsWith(environment.baseUrl )&&  !url.startsWith(`${environment.baseUrl}/auth/sign-in/`)&& !url.startsWith(`${environment.baseUrl}/auth/register/`)) {

      const token = localStorage.getItem('authToken');
      const header = 'Bearer ' + token;

      const headers = req.headers
        .set('Authorization', header);

      req = req.clone({headers});
    }

    return next.handle(req).pipe(
      map(event => event) 
    );
  }


}
