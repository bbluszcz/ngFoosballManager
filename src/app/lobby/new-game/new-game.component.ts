import { PlayersService } from './../../shared/players.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent implements OnInit {
  @ViewChild('player') player;
  form: FormGroup;
  filteredPlayers: Observable<any[]>;
  players: any[];
  teamA = [];
  teamB = [];
  invitedPlayer;
  team;
  index;
  alertTeamA: boolean;
  alertTeamB: boolean;
  alertOddNumber: boolean;
  alertDuplicatePlayer: boolean;
  idsOfPlayersA = [];
  idsOfPlayersB = [];
  indexes = [];


  teams = [
    { value: 'teamA', viewValue: 'Team A' },
    { value: 'teamB', viewValue: 'Team B' },
  ];

  constructor(private playerService: PlayersService) {
    this.form = new FormGroup({
      'selectedPlayer': new FormControl(null, [Validators.required, this.acceptableNamesValidator.bind(this)]),
      'team': new FormControl(null, Validators.required),
    });
    this.filteredPlayers = this.form.get('selectedPlayer').valueChanges
      .pipe(
        startWith(''),
        map(player => player ? this.filter(player) : this.players));
  }

  ngOnInit() {
    this.players = this.playerService.players;
    this.resetAlerts();
    this.idsOfPlayersA = [];
    this.idsOfPlayersB = [];
  }

  filter(name: string) {
    return this.players.filter(player =>
      player.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  onSubmit() {
    this.auxilliaryFn();
  }

  auxilliaryFn(deletedPlayersIndexes?) {
  //   let deletedPlayersIndexes1 = [];
  //   console.log('indexes1', this.indexes);
  //   if (deletedPlayersIndexes) {deletedPlayersIndexes1 = deletedPlayersIndexes; }
  //   console.log('deletedPlayersIndexes1 ', deletedPlayersIndexes1);
  //   if (deletedPlayersIndexes1.length !== 0) {for (let i = 0; i < deletedPlayersIndexes.length; i++) {
  //     this.indexes.splice(this.players.findIndex(x => x === this.indexes[i]));
  //   }
  // }
    console.log('indexes2 ', this.indexes);
    this.invitedPlayer = this.form.value.selectedPlayer;
    this.team = this.form.value.team;
    const index = this.players.findIndex(x => x.name === this.invitedPlayer);
    // console.log('index ', index);

    if (this.indexes.indexOf(index) === -1) {
      if (this.team === 'teamA' && this.teamA.length <= 1) {
        this.teamA.push(this.players[index]);
      } else if (this.team === 'teamB' && this.teamB.length <= 1) {
        this.teamB.push(this.players[index]);
      } else if (this.team === 'teamA' && this.teamA.length > 1) {
        this.alertTeamA = true;
      } else if (this.team === 'teamB' && this.teamB.length > 1) {
        this.alertTeamB = true;
      }
      this.indexes.push(index);
      console.log('indexes3 ', this.indexes);

    } else {
      this.alertDuplicatePlayer = true;
    }
  }

  passIndexA(index: number) {
    const checkA = this.idsOfPlayersA.indexOf(index);
    if (checkA === -1) {
      this.idsOfPlayersA.push(index);
    } else {
      this.idsOfPlayersA.splice(checkA, 1);
    }
  }

  passIndexB(index: number) {
    const checkB = this.idsOfPlayersB.indexOf(index);
    if (checkB === -1) {
      this.idsOfPlayersB.push(index);
    } else {
      this.idsOfPlayersB.splice(checkB, 1);
    }
  }

  onDeletePlayer() {
    let deletedPlayersFromA = [];
    if (this.idsOfPlayersA.length !== 0) { this.idsOfPlayersA.map(i => deletedPlayersFromA.push(this.teamA[i]['name']));
      }
    let deletedPlayersFromB = [];
    if (this.idsOfPlayersB.length !== 0) {this.idsOfPlayersB.map(i => deletedPlayersFromB.push(this.teamB[i]['name'] ) );
    }
    const deletedPlayers = deletedPlayersFromA.concat(deletedPlayersFromB);
    const deletedPlayersIndexes = [];
    for (let i = 0; i < deletedPlayers.length; i++) {
      deletedPlayersIndexes.push(this.players.findIndex(x => x.name === deletedPlayers[i]));
    }
    this.idsOfPlayersA.map(el => this.teamA.splice(el, 1));
    this.idsOfPlayersB.map(el => this.teamB.splice(el, 1));
    this.idsOfPlayersA = [];
    this.idsOfPlayersB = [];
    deletedPlayersFromA = [];
    deletedPlayersFromB = [];
    this.auxilliaryFn(deletedPlayersIndexes);
  }

  onGetStarted() {
    if (this.teamA.length !== this.teamB.length) {
      this.alertOddNumber = true;
    }
  }

  resetAlerts() {
    this.alertTeamA = false;
    this.alertTeamB = false;
    this.alertOddNumber = false;
    this.alertDuplicatePlayer = false;
  }


  // validators
  acceptableNamesValidator(control: FormControl): { [s: string]: boolean } {
    // tslint:disable-next-line:max-line-length
    const acceptableNames = ['Stanislaw Koniecpolski', 'Sultan Mehmed', 'Petro Doroshenko', 'Jan Sobieski', 'Kara Mustafa Pasha', 'Jan Karol Chodkiewicz', 'Adil Giray'];
    if (acceptableNames.indexOf(control.value) === -1) {
      return { 'playerDoesNotExist': true };
    }
  }

}
