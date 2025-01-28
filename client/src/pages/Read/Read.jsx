import { NavLink } from "react-router";
import "./Read.css";
import Layout from "../../components/layout/Layout";
import { useEffect, useState } from "react";

export default function Read() {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((res) => res.json())
      .then(data => {
        setBookData(data.data);
      });
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
              <td>{book['published year']}</td>
              <td>{book.description}</td>
              <td className="option-buttons">
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </Layout>
    </>
  );
}
