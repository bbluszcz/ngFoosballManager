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
    teamA = [];
    teamB = [];

    constructor(private http: Http) {
        this.getJSON();
    }

     getJSON(): Observable<any> {
        return this.http.get('./assets/players.json')
            .map((res: any) =>  this.players = res.json() )
            .map(json => {
                this.players = json['players'];
                this.playersChanged.next(this.players.slice());
        })
            .catch((error: any) => Observable.throw( 'error', error));
    }

    updateStats(teamAscore: number, teamBscore: number) {
        // console.log('team A before', this.teamA[1].victories, this.teamA[1].goalsScored, this.teamA[1].gamesPlayed, );
// console.log('team B before', this.teamB);
        this.updateGamesPlayed();
        this.updateGoalsScored(teamAscore, teamBscore);
        if (teamAscore > teamBscore) {
            this.updateVictories(this.teamA);
        } else if (teamAscore < teamBscore) {
            this.updateVictories(this.teamB);
        }
        console.log('team B after ', this.teamB);
    }

    updateVictories(teamWon) {
        teamWon.map(player => player.victories = +(player.victories ) + 1);
    }

    updateGoalsScored(teamAscore: number, teamBscore: number) {
        this.teamA.map(player => player.goalsScored = +(player.goalsScored) + teamAscore);
        this.teamB.map(player => player.goalsScored = +(player.goalsScored) + teamBscore);
    }

    updateGamesPlayed() {
        this.teamA.map(player => player.gamesPlayed = +(player.gamesPlayed) + 1);
        this.teamB.map(player => player.gamesPlayed = +(player.gamesPlayed) + 1);
    }
}
