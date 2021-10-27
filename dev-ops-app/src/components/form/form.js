import React from 'react';
import './form.scss';
import axios from "axios";

const Form = (props) => {

    return (
        <div className="form">
            <form>
                <input type="text" placeholder="Title..."></input>
                <input type="text" placeholder="Author..."></input>
                <input type="text" placeholder="Genre..."></input>
                <button type="submit">submit</button>
            </form>
        </div>
    )

}


export default Form;