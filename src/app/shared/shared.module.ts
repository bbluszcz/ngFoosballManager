import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersService } from './players.service';
import { ActiveDirective } from './active.directive';
// directives
// import { InputFilterPipe } from './input-filter.pipe';
// import { SortPipe } from './sort.pipe';

@NgModule({
  declarations: [
   // SortPipe
  ActiveDirective],
  imports: [FormsModule],
  exports: [
    CommonModule,
    ActiveDirective
    // InputFilterPipe,
    // SortPipe
  ],
  providers: [PlayersService]
})
export class SharedModule {}
