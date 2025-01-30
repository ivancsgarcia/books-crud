import { NavLink } from "react-router";
import "./Read.css";
import Layout from "../../components/layout/Layout";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Read() {
  const [bookData, setBookData] = useState([]);

  const getBooks = async () => {
    const response = await axios.get("http://localhost:3000/books");
    const data = response.data.data
    setBookData(data)
  };

  const updateBook = () => {

  }

  const deleteBook = () => {
    axios.delete("http://localhost:3000/books/")
  };

  useEffect(() => {
    getBooks()
  });

  return (
    <>
      <Layout>
        <div className="read-top">
          <h1>Books</h1>
          <NavLink to="/create" className="add-book-btn">
            Add Book
          </NavLink>
        </div>

        <input type="text" placeholder="Search Title" />

        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Genre</th>
              <th>Published Year</th>
              <th>Description</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {bookData.map((book, key) => (
              <tr key={key}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.genre}</td>
                <td>{book.yearPublished}</td>
                <td>{book.description}</td>
                <td className="option-buttons">
                  <button onClick={updateBook}>Edit</button>
                  <button onClick={deleteBook}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Layout>
    </>
  );
}
