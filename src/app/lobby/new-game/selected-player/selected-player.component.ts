import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-selected-player',
  templateUrl: './selected-player.component.html',
  styleUrls: ['./selected-player.component.scss']
})
export class SelectedPlayerComponent implements OnInit {
  @Input() player;
  @Input() index;

  constructor() { }

  ngOnInit() {
  }

}
