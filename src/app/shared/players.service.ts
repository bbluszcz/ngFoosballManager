import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { Response } from '@angular/http';


@Injectable()
export class PlayersService {
  players: any[];
  playersChanged = new Subject<any[]>();

    constructor(private http: Http) {
    }

     getJSON(): Observable<any> {
        return this.http.get('../../assets/players.json')
            .map((res: any) =>  this.players = res.json() )
            .map(json => this.players = json['players'])
            .catch((error: any) => Observable.throw( 'error', error));
    }

    getPlayers() {
        return this.players.slice();
    }
}
