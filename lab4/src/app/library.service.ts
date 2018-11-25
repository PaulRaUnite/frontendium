import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Book} from "./book";

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  id_counter = 1;
  books: Book[] = [];

  constructor() {
    this.books.push(new Book(0, 'Book', 'Me', 1999));
  }

  addBook(book: Book): number {
    book.id = this.id_counter;
    this.books.push(book);
    return this.id_counter++;
  }

  getBook(id: number) {
    return this.books.find((v, i, a) => v.id === id);
  }

  removeBook(id: number): boolean {
    let index = this.books.findIndex((v, _, __) => v.id === id);
    if (index === undefined) {
      return false;
    }
    this.books.splice(index, 1);
    return true;
  }

  getBooks(): Observable<Book[]> {
    return of(this.books);
  }
}
