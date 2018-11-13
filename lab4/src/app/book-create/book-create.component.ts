import { Component, OnInit } from '@angular/core';
import {LibraryService} from "../library.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  constructor(private library: LibraryService, private router: Router) { }

  ngOnInit() {
  }

  create(title: string, author: string, year: number) {
    let new_id = this.library.addBook(title, author, year);
    this.router.navigate(['books/'+new_id.toString()])
  }
}
