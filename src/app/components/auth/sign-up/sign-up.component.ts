import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { element } from 'protractor';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  name;
  photoUrl;
  phoneNumber;
  password1;
  password2;
  momoChannel = 'mtn';;

  constructor(private toastr: ToastrService, private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }
  register() {
    if (!this.password1 || !this.password2) {
      this.toastr.error('password Field cant be empty', 'Error!');
      throw new Error('password empty');
    } else if (this.password1 != this.password2) {
      this.toastr.error('password mismatch', 'Error!');
      throw new Error('password mismatch');
    }
    this.authService.register({

      name: this.name,
      photoUrl: this.photoUrl,
      momoNumber: this.phoneNumber,
      password: this.password1,
      momoChannel: this.momoChannel
    }).subscribe(
      res => {
        localStorage.setItem('authToken', res.authToken)
        this.router.navigate(['/dashboard/invest']);

      }, err => {
        console.log(err);
        this.toastr.error(err.error.message, 'Error!');
        if (err.error.details) {
          err.error.details.forEach(element => {
            this.toastr.error(element.error, 'Error!');
          });
        }
      }
    )
  }

}
