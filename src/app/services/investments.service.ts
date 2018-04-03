import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { environment } from '../../environments/environment';

@Injectable()
export class InvestmentsService {

  constructor(private http: HttpClient) { }

  pledge(investmentPackageId):Observable<any> {
    const url = `${environment.baseUrl}/investments/`;
    return this.http.post(url, {investmentTypeId:investmentPackageId})
  }
  getUserInvestments():Observable<any> {
    const url = `${environment.baseUrl}/investments/`;
    return this.http.get(url)
  }
  getAllInvestmentsTypes():Observable<any> {
    const url = `${environment.baseUrl}/investments/types/`;
    return this.http.get(url)
  }
  activateInvestment(investmentId):Observable<any> {
    const url = `${environment.baseUrl}/investments/${investmentId}/activate`;
    return this.http.put(url,{});
  }
}
