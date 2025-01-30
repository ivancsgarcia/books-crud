const books = [
  {
    id: 1,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    yearPublished: "1937",
    description:
      "The adventure of Bilbo Baggins as he embarks on a journey to reclaim a lost treasure guarded by a dragon.",
  },
];

class BookController {
  static getBooks(req, res) {
    res.json({
      data: books,
    });
  }

  static addBook(req, res) {
    const book = req.body;

    books.push({ id: books.length + 1, ...book });
    res.send(`${book.title} has been added to the database.`);
  }

  static updateBook(req, res) {
    const bookId = req.params.id;
    const book = books.find((book) => {
      return book.id == bookId;
    });

    if (req.body.title) {
      book.title = req.body.title;
    }
    if (req.body.author) {
      book.author = req.body.author;
    }
    if (req.body.genre) {
      book.genre = req.body.genre;
    }
    if (req.body.yearPublished) {
      book.yearPublished = req.body.yearPublished;
    }
    if (req.body.description) {
      book.description = req.body.description;
    }

    res.send(`${book.title} has been updated.`);
  }

  static deleteBook(req, res) {
    const bookId = req.params.id;

    const removedBook = books.find((book) => {
      return book.id == bookId;
    });

    books.splice(bookId - 1, 1);

    res.send(`${removedBook.title} has been removed from the database.`);
  }
}

module.exports = BookController;
