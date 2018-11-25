import {Component, OnInit} from '@angular/core';
import {ListsService} from "./lists.service";
import {CounterService} from "./counter.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  active = [];
  inactive = [];
  count = 0;
  constructor(public listsService: ListsService, public counterService: CounterService) {
  }

  ngOnInit() {
    this.listsService.getActiveUsers().subscribe(a => this.active = a);
    this.listsService.getInactiveUsers().subscribe(a => this.inactive = a);
  }
}
