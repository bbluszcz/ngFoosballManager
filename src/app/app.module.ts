// ng modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// my modules
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
// components
import { AppComponent } from './app.component';
import { LobbyComponent } from './lobby/lobby.component';
import { NewGameComponent } from './lobby/new-game/new-game.component';
import { PlayerListComponent } from './lobby/player-list/player-list.component';
import { PlayerDetailsComponent } from './lobby/player-details/player-details.component';
import { PlayerEditComponent } from './lobby/player-edit/player-edit.component';
import { PlayerItemComponent } from './lobby/player-list/player-item/player-item.component';
import { LobbyStartComponent } from './lobby/lobby-start/lobby-start.component';
import { SelectedPlayerComponent } from './lobby/new-game/selected-player/selected-player.component';
import { GameResultsComponent } from './lobby/game-results/game-results.component';
import { StatsComponent } from './stats/stats.component';

@NgModule({
  declarations: [
    AppComponent,
    LobbyComponent,
    NewGameComponent,
    SelectedPlayerComponent,
    PlayerDetailsComponent,
    StatsComponent,
    PlayerListComponent,
    PlayerEditComponent,
    PlayerItemComponent,
    LobbyStartComponent,
    GameResultsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    // my modules:
    CoreModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
