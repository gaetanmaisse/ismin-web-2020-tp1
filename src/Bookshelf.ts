import { Book } from './Book';

export class Bookshelf {
  private readonly storage: Map<string, Book> = new Map();

  addBook(book: Book): void {
    this.storage.set(book.title, book);
  }

  getBook(name: string): Book | undefined {
    return this.storage.get(name);
  }

  getBooksOf(author: string): Book[] {
    return Array.from(this.storage.values()).filter(
      (book) => book.author === author
    );
  }

  getAllBooks() {
    return Array.from(this.storage.values()).sort((bookA, bookB) =>
      bookA.title.localeCompare(bookB.title)
    );
  }

  getTotalNumberOfBooks() {
    return this.storage.size;
  }
}
