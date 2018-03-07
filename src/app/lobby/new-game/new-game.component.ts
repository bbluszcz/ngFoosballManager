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

  auxilliaryFn() {
    console.log('form ', this.form);
    this.invitedPlayer = this.form.value.selectedPlayer;
    this.team = this.form.value.team;
    const index = this.players.findIndex(x => x.name === this.invitedPlayer);
    console.log('index ', index);
    console.log('indexes ', this.indexes);

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
    const deletedPlayersFromA = [];
    this.idsOfPlayersA.map(i => deletedPlayersFromA.push(this.teamA[i]['name']));
    const deletedPlayersFromB = [];
    this.idsOfPlayersA.map(i => deletedPlayersFromB.push(this.teamB[i]['name'] ) );
    const deletedPlayers = deletedPlayersFromA.concat(deletedPlayersFromB);
    this.idsOfPlayersA.map(el => this.teamA.splice(el, 1));
    this.idsOfPlayersB.map(el => this.teamB.splice(el, 1));
    this.idsOfPlayersA = [];
    this.idsOfPlayersB = [];
    this.auxilliaryFn();
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
