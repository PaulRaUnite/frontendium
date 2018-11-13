import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LibraryService} from "../library.service";
import {Book} from "../book";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  id: number = null;
  book: Book = null;

  constructor(private route: ActivatedRoute, private router: Router, private library: LibraryService) {
    this.route.params.subscribe(res => {
      this.id = parseInt(res.id);
      this.book = this.library.getBook(this.id);
    });
  }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['books'])
  }

  remove() {
    this.library.removeBook(this.id);
    this.back();
  }
}
