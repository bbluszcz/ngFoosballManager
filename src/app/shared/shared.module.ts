// ng
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';


// services
import { PlayersService } from './players.service';
// directives&pipes
import { ActiveDirective } from './active.directive';


@NgModule({
  declarations: [
   // SortPipe
  ActiveDirective,
  ],
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatTableModule,
    MatSortModule,
    MatTooltipModule
],
  exports: [
    CommonModule,
    ActiveDirective,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatTableModule,
    MatSortModule,
    MatTooltipModule
  ],
  providers: [PlayersService]
})
export class SharedModule {}
