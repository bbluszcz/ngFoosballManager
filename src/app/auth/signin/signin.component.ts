import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  isValidated;
  errorAlert;

  constructor(private authService: AuthService) { }
  ngOnInit() {
    this.isValidated = true;
  }

  get errorMsg(): string {
    this.errorAlert = this.authService.errorMsg;

    // this.errorAlert = this.errorAlert ? this.errorAlert.replace('Error: ', '') : '';
    return this.errorAlert;
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signinUser(email, password);
    this.validateForm(form);
    console.log(' onSignin ', this.errorAlert);

  }

    validateForm(form) {
      if (form.invalid && form.touched ) {
        this.isValidated = false;
      }
      console.log(' onSignin ', this.errorAlert);

    }

}
