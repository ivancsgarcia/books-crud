import Layout from "../../components/layout/Layout";
import './Update.css'

export default function Update() {
  return (
    <>
      <Layout>
        <form action="">
          <h1 className="title">Update Book</h1>

          <label>Book Title</label>
          <input type="text" placeholder="The Hobbit" />

          <label>Book Author</label>
          <input type="text" placeholder="J.R.R. Tolkien" />

          <label>Book Genre</label>
          <input type="text" placeholder="Fantasy" />

          <label>Book Published Year</label>
          <input type="text" placeholder="1937" />

          <label>Description</label>
          <textarea className="desc" rows={5} placeholder="The adventure of Bilbo Baggins as he embarks on a journey to reclaim a lost treasure guarded by a dragon."></textarea>

          <button className="save-btn">Save Book</button>
        </form>
      </Layout>
    </>
  );
}
