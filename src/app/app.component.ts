import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    firebase.initializeApp({
     apiKey: "AIzaSyBQmmlunHoxZZWl-eX_g54cq4qZJn1DS38",
    authDomain: "stack-blitz-test.firebaseapp.com",
    });
  }

}
