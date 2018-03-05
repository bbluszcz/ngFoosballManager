import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
// tslint:disable-next-line:import-blacklist
import { Subscription } from 'rxjs';
import { PlayersService } from '../../shared/players.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit, OnDestroy {


  players: any[];
  subscription: Subscription;

  listFilter: string;
  ddlistFilter = 'All'; // setting the genre gilter to 'All'
  sortByFilter = '';

  constructor(private playersService: PlayersService,
              private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    // this.subscription = this.playersService.playersChanged
    //   .subscribe(
    //     (players: any[]) => {
    //       this.players = players;
    //     }
    //   );
    this.players = this.playersService.getPlayers();

//     this.playersService.getJSON().subscribe((players: any[]) => {
//     this.players = players; console.log('players ', this.players);
// },
//      error => console.log(error)
//     );
  }

  onClearSearch() {
    this.listFilter = '';
  }

  onNewGame() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }


  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

}
