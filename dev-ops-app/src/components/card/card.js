import React from 'react';
import './card.scss';
import Axios from 'axios';
import UpdateForm from '../updateForm/updateForm';

const Card = (props) => {
    const  {id, title, author, genre, read} = props;
    const url = "http://localhost:4000/api/books/" + id;
    const bookRead = (read) => 
        ((read) ? <><span style={{color:'green'}}>read</span></> : <><span style={{color:'red'}}>read</span></>);
    return (
        <div className="card">
            <img 
                src="https://th.bing.com/th/id/OIP.m94WGQGcUBt81SP157qugAHaDF?pid=ImgDet&rs=1" 
                alt="Avatar"/>
            <div>
                <h4>{title}</h4>
                <p>{author}</p>
                <p>{genre}</p>
                {bookRead(read)}
            </div>
            {/* <button onClick= {
                <UpdateForm {...props} />
            }> Update fields </button> */}
            <button onClick={
                () => {
                    let readBook = (read) ? false : true;
                    Axios.patch(url, { read: readBook})
                }
            }>Update read</button>
            <button onClick={
                () => {
                    Axios.delete(url); 
                }
            }>Delete</button>
        </div>
    )

}


export default Card;