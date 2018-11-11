import { Component, OnInit } from '@angular/core';
import {ListsService} from "../lists.service";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor(private listsService: ListsService) { }

  ngOnInit() {
  }

  createUser(name: string) {
    this.listsService.addUser(name, true)
  }
}
