const books = [{
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    "published year": "1937",
    description: "The adventure of Bilbo Baggins as he embarks on a journey to reclaim a lost treasure guarded by a dragon."
}];

class BookController {
  static getBooks(req, res) {
    res.status(200).json({
      message: "OK",
      data: books,
    });
  }

//   static addBook(req, res) {}

//   static updateBook(req, res) {}

//   static deleteBook(req, res) {}
}

module.exports = BookController;
