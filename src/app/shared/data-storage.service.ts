import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  currentEmail: string;
  currentUser;
  constructor(private http: Http,
              private authService: AuthService) {
  }

  // storeStats() {
  //   const token = this.authService.getToken();
  //   this.getCurrentUser();
  //   return this.http.put('https://xxxx.firebaseio.com/' +
  //     this.currentUser + '/xxx.json?auth=' + token, this.movieService.getMovies())
  // }



  // getStats() {
  //   const token = this.authService.getToken();
  //   this.getCurrentUser();
  //   this.http.get('https://xxxx.firebaseio.com/' +
  //     this.currentUser + '/xxx.json?auth=' + token)
  //     .map(
  //       (response: Response) => {
  //         const movies: Actor[] = response.json();
  //         for (const movie of movies) {
  //           if (!movie['actors']) {
  //             movie['actors'] = [];
  //           }
  //         }
  //     return movies;
  //   }
  //     )
  //     .subscribe(
  //       (movies: Movie[]) => {
  //         this.movieService.setMovies(movies);
  //       }
  //     );
  // }



  // getCurrentUser() {
  //   this.currentUser = this.authService.currentUser;
  //   this.currentEmail = this.authService.currentEmail;
  // }
}
