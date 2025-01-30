const useRouter = require("express").Router;
const BookController = require("../controllers/Book");

const Router = useRouter();

Router.get("/", BookController.getBooks);
Router.post('/', BookController.addBook)
Router.patch('/:id', BookController.updateBook)
Router.delete('/:id', BookController.deleteBook)

module.exports = Router;
