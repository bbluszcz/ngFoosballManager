import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { findIndex } from 'rxjs/operators';

@Injectable()
export class AuthService {
  isLogout = false;
  currentEmail: string;
  localStorage;
  currentUser: string;
  token: string;
  errorMsg: string;

  constructor(private router: Router) {}

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(
          response => {
            this.router.navigate(['/lobby']);
            firebase.auth().currentUser.getIdToken()
              .then(
                (token: string) => this.token = token
              );
            this.getCurrentUser(firebase.auth().currentUser);
          }
        )
      .catch(
        error => console.log(error)
      );
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/lobby']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            );
            this.getCurrentUser(firebase.auth().currentUser);
            this.isLogout = false;
        }
      )
      .catch(
        error => {
          this.errorMsg = error;
          console.log(this.errorMsg);
        }
      );
  }

  loginUser(email: string, password: string): Promise<any> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  getCurrentUser(currentUser) {
    this.currentEmail = firebase.auth().currentUser.email;
    this.currentUser = this.currentEmail.substring(0, this.currentEmail.indexOf('@'));

  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/']);
    this.isLogout = true;
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    // localStorage.setItem("token", this.token);
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;

  }

}
