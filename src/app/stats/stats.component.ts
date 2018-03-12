import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
// services
import { PlayersService } from './../shared/players.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit, AfterViewInit {
  displayedColumns = [ 'name', 'victories', 'goalsScored', 'gamesPlayed', 'level'];
  dataSource = new MatTableDataSource(this.playersService.players);

  @ViewChild(MatSort) sort: MatSort;

  constructor(private playersService: PlayersService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
