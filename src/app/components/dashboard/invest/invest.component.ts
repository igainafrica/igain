import { Component, OnInit } from '@angular/core';
import { InvestmentsService } from '../../../services/investments.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-invest',
  templateUrl: './invest.component.html',
  styleUrls: ['./invest.component.css']
})
export class InvestComponent implements OnInit {
  investmentPackage;
  investmentPackages:any[];
  constructor(private toastr: ToastrService,private activatedRoute:ActivatedRoute,private investmentService: InvestmentsService) {
    this.investmentPackages = this.activatedRoute.snapshot.data['investmentTypes'].data;
    this.investmentPackage = this.investmentPackages[0].id;

  

  }

  ngOnInit() {
  }
  invest() {
    this.investmentService.pledge(this.investmentPackage).subscribe(investment => {
      console.log(investment);
      this.investmentService.activateInvestment(investment.data.id).subscribe(result => {
        this.toastr.success('Pledge Placed!', 'Success!');
        window.location.href='/dashboard/transactions'
      }, err => {
        this.toastr.error(`Please Pay! ${investment.data.fee} to activate this donation`, 'Error!');
        window.location.href='/dashboard/transactions'
      })
    }, err => {
      this.toastr.error('Pledge could not be Placed!', 'Error!');
    })
  }
}
