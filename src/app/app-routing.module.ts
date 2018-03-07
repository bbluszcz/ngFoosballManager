import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
// components
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { LobbyComponent } from './lobby/lobby.component';
import { LobbyStartComponent } from './lobby/lobby-start/lobby-start.component';
import { StatsComponent } from './stats/stats.component';
import { PlayerDetailsComponent } from './lobby/player-details/player-details.component';
import { NewGameComponent } from './lobby/new-game/new-game.component';
import { LobbyRoutingModule } from './lobby/lobby-routing.module';

const appRoutes: Routes = [
  { path: '', redirectTo: 'lobby', pathMatch: 'full' },
  { path: 'stats', component: StatsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: '**', redirectTo: 'lobby', pathMatch: 'full' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes), LobbyRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
