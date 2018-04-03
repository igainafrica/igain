import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getMe(){
    const url = `${environment.baseUrl}/auth/myinfo/`;
    return this.http.get(url);
  }
}
