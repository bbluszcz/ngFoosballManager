import { NgModule } from '@angular/core';

// my modules
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
// components
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
// services
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [
    DataStorageService,
    AuthService
  ]
})
export class CoreModule {}
