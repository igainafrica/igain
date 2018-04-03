import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  number;
  password;

  constructor(private toastr: ToastrService,private router:Router, private authService:AuthService) { }

  ngOnInit() {
  }

  login() {
    if(!this.number||!this.password){
      throw new Error('username or password cant be empty')
    }
    console.log(this.number, this.password);
    this.authService.signIn(this.number,this.password).subscribe(
      res=>{
        localStorage.setItem('authToken',res.authToken)
        this.router.navigate(['/dashboard/invest']);
      }, err=>{
        console.log(err);
        this.toastr.error('Error Signing in, try again!', 'Error!');

      }
    )
  }

}
