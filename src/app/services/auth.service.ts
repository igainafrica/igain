import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { UserService } from './user.service';


@Injectable()
export class AuthService {

  curentUser: any;
  constructor(private userservice:UserService, private http: HttpClient) { }

  register(user):Observable<any> {
    const url = `${environment.baseUrl}/auth/register/`;
    const body={data:user};
    return this.http.post(url, body);
  }
  signIn(number: string, password: string):Observable<any> {
    const url = `${environment.baseUrl}/auth/sign-in/`;
    const data = { momoNumber: number, password: password };
    const body={data:data};
    return this.http.post(url, body);

  }

  requestPasswordReset() {

  }

  resetPassword() {

  }
  signOut() {
    localStorage.removeItem('authToken');
    return Observable.of(true);
  }
  isLoggedIn() {
    const token = localStorage.getItem("authToken");
    return !!token ? true : false;
  }
  getCurrentUser() {
    return Observable.create(observer => {
      if (!this.isLoggedIn()){
        observer.error('not logged in');
      }
      this.userservice.getMe().subscribe(user => {
        if (user) {
          observer.next(user);
          observer.complete();
        } else {
          observer.error(false);
        }
      }, error => {
        observer.error(error);
      });
    });
  }

}
