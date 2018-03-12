import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
// services
import { PlayersService } from './../../shared/players.service';

@Component({
  selector: 'app-game-results',
  templateUrl: './game-results.component.html',
  styleUrls: ['./game-results.component.scss']
})
export class GameResultsComponent implements OnInit {
  form: FormGroup;
  teamBscore: number;
  teamAscore: number;
  teamA = [];
  teamB = [];

  constructor(private playersService: PlayersService,
              private router: Router) {
      this.form = new FormGroup({
      'teamAscore': new FormControl(null, [Validators.required,
      Validators.pattern(/^[0-9]\d*$/)] ),
      'teamBscore': new FormControl(null, [Validators.required,
      Validators.pattern(/^[0-9]\d*$/)]),
    });
  }

  ngOnInit() {
    this.teamA = this.playersService.teamA;
    this.teamB = this.playersService.teamB;
  }

  onSubmitResults() {
    this.teamAscore = +this.form.value.teamAscore;
    this.teamBscore = +this.form.value.teamBscore;
    this.playersService.updateStats(this.teamAscore, this.teamBscore);
    this.router.navigate(['/lobby']);

  }
}
