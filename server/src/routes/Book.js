const useRouter = require("express").Router;
const BookController = require("../controllers/Book");

const Router = useRouter();

Router.get("/", BookController.getBooks);
// Router.post('/', BookController.)
// Router.put('/:id', BookController.)
// Router.delete('/:id', BookController.)

module.exports = Router;
