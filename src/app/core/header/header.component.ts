import { OnInit, Renderer2 } from '@angular/core';
import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit  {
  position = 'before';
  navbarToggler = false;

token: string;

  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService) {
  }
  ngOnInit() {
  }

  onNavbarToggle() {
    this.navbarToggler = !this.navbarToggler;
  }

  onSaveData() {
    this.dataStorageService.storeStats().subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

  onFetchData() {
    this.dataStorageService.getStats();
  }

  onLogout() {
    this.authService.logout();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
