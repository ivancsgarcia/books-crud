const { v4: uuidv4 } = require("uuid");

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
        try {
            res.status(200).json({
                data: books,
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static getBookById(req, res) {
        try {
            const bookId = req.params.id;

            const book = books.find((book) => {
                return book.id == bookId;
            });

            res.status(200).json({
                data: book,
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static addBook(req, res) {
        try {
            const book = req.body;

            books.push({ id: uuidv4(), ...book });
            res.send(`${book.title} has been added to the database.`);
        } catch (error) {
            res.status(500).json({
                error: error.message,
            });
        }
    }

    static updateBook(req, res) {
        try {
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

            res.status(500).json({
                message: `${book.title} has been updated.`,
                data: books,
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static deleteBook(req, res) {
        try {
            const bookId = req.params.id;
            const bookIndex = books.findIndex((book) => {
                return book.id == bookId;
            });

            const removedBook = books.find((book) => {
                return book.id == bookId;
            });

            books.splice(bookIndex, 1);

            res.status(200).json({
                message: `${removedBook.title} has been removed from the database`,
                data: books,
            });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = BookController;
