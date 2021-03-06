import React, {useState, useEffect} from 'react';
import './form.scss';
import axios from "axios";

const Form = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [genre, setGenre] = useState("");

    const submitForm = async (e) => {
       // e.preventDefault();
        console.log(title)
        if (title && author && genre) {
          axios.post("http://localhost:4000/api/books", {title: title.toString(), author: author.toString(), genre: genre.toString()})
          .then((res) => console.log(res))
          .catch(error => {
              console.log(error);
            });
        }

    }
        


    const updateTitle = (event) => {
        setTitle(event.target.value);
      };

      const updateAuthor = (event) => {
        setAuthor(event.target.value);
      };

      const updateGenre = (event) => {
        setGenre(event.target.value);
      };

    return (
        <div className="form">
            <form onSubmit={submitForm}>
                <input type="text" placeholder="Title..." value={title} onChange={updateTitle}></input>
                <input type="text" placeholder="Author..." value={author} onChange={updateAuthor}></input>
                <input type="text" placeholder="Genre..." value={genre} onChange={updateGenre}></input>
                <button type="submit">submit</button>
            </form>
        </div>
    )

}


export default Form;