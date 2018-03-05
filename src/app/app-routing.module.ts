import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
// components
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { LobbyComponent } from './lobby/lobby.component';
import { LobbyStartComponent } from './lobby/lobby-start/lobby-start.component';
import { StatsComponent } from './stats/stats.component';
import { PlayerDetailsComponent } from './lobby/player-details/player-details.component';

const appRoutes: Routes = [
  { path: '', component: LobbyComponent },
  // { path: 'lobby', loadChildren: './lobby/lobby.module#LobbyModule'},
  { path: 'lobby', component: LobbyComponent, children : [
    { path: '', component: LobbyStartComponent },
    { path: ':id', component: PlayerDetailsComponent },
  ]},
  { path: 'stats', component: StatsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: '**', component: LobbyComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
