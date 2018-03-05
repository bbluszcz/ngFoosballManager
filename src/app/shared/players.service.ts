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
            .catch((error: any) => Observable.throw( 'error', error));
    }

    getPlayers() {
        console.log("players2 ", this.players2);
        return this.players2.slice();
    }


    players2 = [
        {
            "name": "Stanislaw Koniecpolski",
            "level": "Beginner",
            "victories": "8",
            "goalsScored": "12",
            "gamesPlayed": "23",
            "email": "skoniecpolski@ecovadis.com",
            "photo": "assets/images/sk.jpg"
        },
        {
            "name": "Sultan Mehmed",
            "level": "Advanced",
            "victories": "18",
            "goalsScored": "23",
            // tslint:disable-next-line:quotemark
            "gamesPlayed": "29",
            "email": "smehmed@ecovadis.com",
            "photo": "assets/images/sm.jpg"
        },
        {
            "name": "Petro Doroshenko",
            "level": "Expert",
            "victories": "44",
            "goalsScored": "55",
            "gamesPlayed": "59",
            "email": "pdoroshenko@ecovadis.com",
            "photo": "assets/images/pd.jpg"
        },
        {
            "name": "Jan Sobieski",
            "level": "expert",
            "victories": "52",
            "goalsScored": '77',
            'gamesPlayed': '60',
            'email': 'jsobieski@ecovadis.com',
            'photo': 'assets/images/js.jpg'
        },
        {
            'name': 'Kara Mustafa Pasha',
            'level': 'Advanced',
            'victories': '',
            'goalsScored': '32',
            'gamesPlayed': '25',
            'email': 'pkaramustafa@ecovadis.com',
            'photo': 'assets/images/kmp.jpg'
        },
        {
            'name': 'Jan Karol Chodkiewicz',
            'level': 'advanced',
            'victories': '9',
            'goalsScored': '18',
            'gamesPlayed': '20',
            'email': 'skoniecpolski@ecovadis.com',
            'photo': 'assets/images/jc.jpg'
        },
        {
            'name': 'Adil Giray',
            'level': 'Beginner',
            'victories': '2',
            'goalsScored': '',
            'gamesPlayed': '5',
            'email': 'gadil@ecovadis.com',
            'photo': ''
        }
    ];




}
