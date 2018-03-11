import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// component
import { LobbyComponent } from './lobby.component';
import { PlayerEditComponent } from './player-edit/player-edit.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { LobbyStartComponent } from './lobby-start/lobby-start.component';
import { NewGameComponent } from './new-game/new-game.component';
// service
import { AuthGuard } from '../auth/auth-guard.service';
// pipes

const lobbyRoutes: Routes = [
  {
    path: 'lobby', component: LobbyComponent, children: [
      { path: '', component: LobbyStartComponent },
      { path: 'new', component: NewGameComponent },
      { path: ':id', component: PlayerDetailsComponent },
      { path: '**', component: LobbyStartComponent },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(lobbyRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard
  ]
})
export class LobbyRoutingModule { }
