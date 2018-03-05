import { PlayersService } from './../../shared/players.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent implements OnInit {
players: any[];
teamA: any[];
teamB: any[];

  constructor(private playerService: PlayersService) { }

  ngOnInit() {
    this.players = this.playerService.getPlayers();
    console.log('players ', this.players);
  }

}
