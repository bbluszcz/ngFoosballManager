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
      apiKey: "AIzaSyCC8X8kUjoYgpp1aqahVjeRcOa_aED_EaM",
      authDomain: "ng-foosball.firebaseapp.com",
    });
  }

}
