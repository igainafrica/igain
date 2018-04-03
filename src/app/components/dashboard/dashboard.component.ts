import { Component, OnInit ,OnChanges} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InvestmentsService } from '../../services/investments.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user;
  section;
  isSideBarOpened=false;
  constructor(private router:Router,private authService :AuthService, private activatedRoute:ActivatedRoute) {
   }

  ngOnInit() {
    this.section =  this.activatedRoute.snapshot.params['section'];
    this.user = this.activatedRoute.snapshot.data['user'];

  }
  ngOnChanges(...args: any[]) {
    console.log(this.section);
    
  }
  logout(){
this.authService.signOut().subscribe(res=>{
  this.router.navigate(['/sign-in']);
})
  }
  w3_close(){
this.isSideBarOpened= false;
  }
  w3_open(){
    this.isSideBarOpened= !this.isSideBarOpened;

  }
  onUploadFinished($event){
console.log($event);
  }

}
