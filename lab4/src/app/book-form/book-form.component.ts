import {Component, OnInit} from '@angular/core';
import {Book} from "../book";
import {LibraryService} from "../library.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  model = new Book(-1, 'Title', 'Author', 2000);

  constructor(private router: Router, private libraryService: LibraryService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.libraryService.addBook(this.model);
    this.router.navigate(['books']);
  }
}
