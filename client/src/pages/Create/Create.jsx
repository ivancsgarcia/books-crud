import { NavLink } from "react-router";
import { useState } from "react";
import Layout from "../../components/layout/Layout";
import "./Create.css";
import axios from "axios";

export default function Create() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [genre, setGenre] = useState("");
    const [yearPublished, setyearPublished] = useState("");
    const [description, setdescription] = useState("");
    const [formValues, setFormValues] = useState({
        title: "",
        author: "",
        genre: "",
        yearPublished: "",
        description: "",
    });

    const handleSubmit = () => {
        axios
            .post("http://localhost:3000/books", formValues)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <Layout>
                <form onSubmit={handleSubmit}>
                    <div className="read-top">
                        <h1 className="title">Add Books</h1>
                        <NavLink to='/' className="add-book-btn">
                            Show Books
                        </NavLink>
                    </div>

                    <label>Book Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value);
                            setFormValues({ ...formValues, title: title });
                        }}
                        placeholder="The Hobbit"
                    />

                    <label>Book Author</label>
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => {
                            setAuthor(e.target.value);
                            setFormValues({ ...formValues, author: author });
                        }}
                        placeholder="J.R.R. Tolkien"
                    />

                    <label>Book Genre</label>
                    <input
                        type="text"
                        value={genre}
                        onChange={(e) => {
                            setGenre(e.target.value);
                            setFormValues({ ...formValues, genre: genre });
                        }}
                        placeholder="Fantasy"
                    />

                    <label>Book Published Year</label>
                    <input
                        type="text"
                        value={yearPublished}
                        onChange={(e) => {
                            setyearPublished(e.target.value);
                            setFormValues({
                                ...formValues,
                                yearPublished: yearPublished,
                            });
                        }}
                        placeholder="1937"
                    />

                    <label>Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => {
                            setdescription(e.target.value);
                            setFormValues({
                                ...formValues,
                                description: description,
                            });
                        }}
                        className="desc"
                        rows={5}
                        placeholder="The adventure of Bilbo Baggins as he embarks on a journey to reclaim a lost treasure guarded by a dragon."
                    ></textarea>

                    <input type="submit" value="Save Book" />
                </form>
            </Layout>
        </>
    );
}
