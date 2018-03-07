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

// services
import { PlayersService } from './players.service';
// directives&pipes
import { ActiveDirective } from './active.directive';
// import { InputFilterPipe } from './input-filter.pipe';
// import { SortPipe } from './sort.pipe';

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
],
  exports: [
    CommonModule,
    ActiveDirective,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatSelectModule,

    // InputFilterPipe,
    // SortPipe
  ],
  providers: [PlayersService]
})
export class SharedModule {}
