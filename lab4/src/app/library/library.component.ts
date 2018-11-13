import {AfterViewInit, Component, OnInit} from '@angular/core';
import {LibraryService} from "../library.service";
import {Book} from "../book";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  books: Book[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private library: LibraryService) {
    this.library.getBooks().subscribe((v) => this.books = v)
  }

  ngOnInit() {
  }

  goto(id: number) {
    this.router.navigate(['books/' + id.toString()]);
  }

  removeBook(id: number) {
    this.library.removeBook(id);
  }
}
