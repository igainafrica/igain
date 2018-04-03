import { Component, OnInit } from '@angular/core';
import { InvestmentsService } from '../../../services/investments.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
investments: any[]=[];
user;
  constructor(private activatedRoute:ActivatedRoute,private investmentService:InvestmentsService) {
    this.investments = this.activatedRoute.snapshot.data['userInvesments'].data;
    this.user = this.activatedRoute.snapshot.data['user'];
    console.log('invest',this.activatedRoute.snapshot.data['userInvesments'].data)
   }


  ngOnInit() {
  }

}
