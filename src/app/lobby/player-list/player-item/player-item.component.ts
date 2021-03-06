import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player-item',
  templateUrl: './player-item.component.html',
  styleUrls: ['./player-item.component.scss']
})
export class PlayerItemComponent implements OnInit {
  @Input() player;
  @Input() id: number;

  constructor() { }

  ngOnInit() {
  }

}
