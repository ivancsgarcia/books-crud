import { NavLink } from "react-router";
import "./Read.css";
import Layout from "../../components/layout/Layout";

export default function Read() {
  return (
    <>
      <Layout>
        <div className="read-top">
          <h1>Books</h1>
          <NavLink to="/create">
            <button>Add Book</button>
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
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="option-buttons">
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </Layout>
    </>
  );
}
