import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
// components
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { LobbyComponent } from './lobby/lobby.component';
import { StatsComponent } from './stats/stats.component';

const appRoutes: Routes = [
  { path: '', component: LobbyComponent },
  // { path: 'movies', loadChildren: './movies/movies.module#MoviesModule'},
  { path: 'lobby', component: LobbyComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: '**', component: LobbyComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
