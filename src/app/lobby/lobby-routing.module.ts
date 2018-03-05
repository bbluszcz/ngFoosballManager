import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// component
import { LobbyComponent } from './lobby.component';
import { PlayerEditComponent } from './player-edit/player-edit.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { LobbyStartComponent } from './lobby-start/lobby-start.component';
// service
import { AuthGuard } from '../auth/auth-guard.service';
// pipes

const lobbyRoutes: Routes = [
  {
    path: '', component: LobbyComponent, children: [
      { path: '', component: LobbyStartComponent },
      { path: 'new', component: PlayerEditComponent, canActivate: [AuthGuard] },
      { path: ':id', component: PlayerDetailsComponent },
      { path: ':id/edit', component: PlayerEditComponent, canActivate: [AuthGuard] },
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
