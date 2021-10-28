import React, {useState, useEffect} from 'react';
import './card.scss';
import Axios from 'axios';

const Card = () => {
    const [books, setbooks] = useState([]);
    const url = "http://localhost:4000/api/books";
    const fetchbooks = async () => {
        const { data } = await Axios.get(url);
        const books = data;
        setbooks(books);
    };

    useEffect(() => {
        fetchbooks();
      }, []);

    return (
        <div className="card">
            {books.map((book) => (
                <div key={book._id}>
                    <h4>{book.title}</h4>
                    <p>{book.author}</p>
                </div>
            ))}
        </div>
    )

}


export default Card;