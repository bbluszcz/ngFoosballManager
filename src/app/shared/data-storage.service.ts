import { Observable } from 'rxjs/Observable';
import { PlayersService } from './players.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  currentEmail: string;
  currentUser;
  constructor(private http: Http,
              private authService: AuthService,
              private playerService: PlayersService      ) {
  }

  storeStats(): Observable<Response> {
    const token = this.authService.getToken();
    this.getCurrentUser();
    return this.http.put('https://ng-foosball.firebaseio.com/' +
      this.currentUser + '/players.json?auth=' + token, this.playerService.players);
  }

  getStats() {
    const token = this.authService.getToken();
    this.getCurrentUser();
    this.http.get('https://ng-foosball.firebaseio.com/' +
      this.currentUser + '/players.json?auth=' + token)
      .map(
        (response: Response) => {
          const players = response.json();
      return players;
    }
      )
      .subscribe(
        (players) => {
          this.playerService.setPlayers(players);
        }
      );
      alert('The players data has been successfully retrieved from server');
  }

  getCurrentUser() {
    this.currentUser = this.authService.currentUser;
    this.currentEmail = this.authService.currentEmail;
  }
}
