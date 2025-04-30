import { Component, OnInit } from '@angular/core';
import { BookModel } from '../models/book.model.ts';

@Component({
  selector: 'app-book',
  standalone: false,
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent implements OnInit {
  bookTitle: string = '';
  bookAuthor: string = '';
  books: BookModel[] = [];

  ngOnInit(): void {
    let savedBooks = localStorage.getItem('books');
    this.books = savedBooks ? JSON.parse(savedBooks) : [];
  }

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

      localStorage.setItem('books', JSON.stringify(this.books));
    }
  }

  deleteBook(index: number): void {
    this.books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}
