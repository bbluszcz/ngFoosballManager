import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onNewGame() {
    this.router.navigate(['new'], {relativeTo: this.route});

  }

}
