import React from 'react';
import './card.scss';

const Card = (props) => {
    const  {title, author, genre} = props;

    return (
        <div className="card">
            <img 
                src="https://th.bing.com/th/id/OIP.m94WGQGcUBt81SP157qugAHaDF?pid=ImgDet&rs=1" 
                alt="Avatar"/>
            <div>
                <h4>{title}</h4>
                <p>{author}</p>
                <p>{genre}</p>
            </div>
        </div>
    )

}


export default Card;