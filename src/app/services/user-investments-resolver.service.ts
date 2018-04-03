import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import { InvestmentsService } from './investments.service';

@Injectable()
export class UserInvestmentsResolverService implements Resolve<any> {
  constructor(private investmentService:InvestmentsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.investmentService.getUserInvestments();
  }
}
