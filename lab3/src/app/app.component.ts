import {Component, OnInit} from '@angular/core';
import {ListsService} from "./lists.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  active = [];
  inactive = [];

  constructor(public listsService: ListsService) {}

  ngOnInit() {
    this.listsService.getActiveUsers().subscribe((a) => this.active = a);
    this.listsService.getInactiveUsers().subscribe((a) => this.inactive = a);
  }
}
