import { PlayersService } from './../../shared/players.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent implements OnInit {

  players: any[];
  teamA = [];
  teamB = [];

  constructor(private playerService: PlayersService) { }

  ngOnInit() {
    this.players = this.playerService.getPlayers();
    this.teamA = this.players;
   console.log('teamA ', this.teamA);
  }


}
