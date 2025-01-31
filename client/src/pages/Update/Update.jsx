import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import "./Update.css";
import axios from "axios";
import { useParams } from "react-router";

export default function Update() {
    const params = useParams();
    const [bookData, setBookData] = useState({});

    useEffect(() => {
        axios
            .get(`http://localhost:3000/books/${params.id}`)
            .then((res) => {
                setBookData(res.data.data);
                console.log(bookData);
            })
            .catch((err) => {
                console.log(err);
            });
    });
    return (
        <>
            <Layout>
                <form action="">
                    <h1 className="title">Update Book</h1>

                    <label>Book Title</label>
                    <input
                        type="text"
                        value={bookData.title}
                        placeholder="The Hobbit"
                        onChange={() => {
                          setBookData({...bookData, title:bookData.title})
                        }}
                    />

                    <label>Book Author</label>
                    <input
                        type="text"
                        value={bookData.author}
                        placeholder="J.R.R. Tolkien"
                    />

                    <label>Book Genre</label>
                    <input
                        type="text"
                        value={bookData.genre}
                        placeholder="Fantasy"
                    />

                    <label>Book Published Year</label>
                    <input
                        type="text"
                        value={bookData.yearPublished}
                        placeholder="1937"
                    />

                    <label>Description</label>
                    <textarea
                        value={bookData.description}
                        className="desc"
                        rows={5}
                        placeholder="The adventure of Bilbo Baggins as he embarks on a journey to reclaim a lost treasure guarded by a dragon."
                    ></textarea>

                    <button className="save-btn">Save Book</button>
                </form>
            </Layout>
        </>
    );
}
