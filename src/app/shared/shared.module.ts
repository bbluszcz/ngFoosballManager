import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersService } from './players.service';
// directives
// import { InputFilterPipe } from './input-filter.pipe';
// import { SortPipe } from './sort.pipe';

@NgModule({
  declarations: [
    // InputFilterPipe,
    // SortPipe
  ],
  imports: [FormsModule],
  exports: [
    CommonModule,

    // InputFilterPipe,
    // SortPipe
  ],
  providers: [PlayersService]
})
export class SharedModule {}
