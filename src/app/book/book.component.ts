import { Component } from '@angular/core';
import { BookModel } from '../models/book.model.ts';

@Component({
  selector: 'app-book',
  standalone: false,
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {
  bookTitle: string = '';
  bookAuthor: string = '';

  books: BookModel[] = [];

  addBook(): void {
    alert('You have added' + ' ' + this.bookTitle + ' ' + this.bookAuthor);
    if (this.bookTitle.trim().length && this.bookAuthor) {
      let newBook: BookModel = {
        id: Date.now(),
        title: this.bookTitle,
        author: this.bookAuthor
      };
      this.books.push(newBook);
      this.bookTitle = '';
      this.bookAuthor = '';
      alert(this.books.length + ' ' + 'books have been added');
    }
  }
}
