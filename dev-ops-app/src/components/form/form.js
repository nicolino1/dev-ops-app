import React, { useState } from 'react';
import './form.scss';
import Axios from "axios";

const Form = (props) => {
    const url = "http://localhost:4000/api/books";
    const [data, setData] = useState({
        title: "",
        author: "",
        genre: ""
    });
    const submit = async (e) => {
        e.preventDefault();
        Axios.post(url, {
            title: data.title,
            author: data.author,
            genre: data.genre
        }).then(res => {
            console.log(res.data);
        })
    };
    function handle(e) {
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData);
    }
    return (
        <div className="form">
            <form onSubmit={(e) => submit(e)}>
                <input onChange={(e) => handle(e)} id="title" value={data.title} type="text" placeholder="Title..."></input>
                <input onChange={(e) => handle(e)} id="author" value={data.author} type="text" placeholder="Author..."></input>
                <input onChange={(e) => handle(e)} id="genre" value={data.genre} type="text" placeholder="Genre..."></input>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default Form;