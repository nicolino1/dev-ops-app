import React from 'react';
import './card.scss';

const Card = (props) => {
    const  {title, description} = props;

    return (
        <div className="card">
            <img src="img_avatar.png" alt="Avatar"/>
            <div>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    )

}


export default Card;