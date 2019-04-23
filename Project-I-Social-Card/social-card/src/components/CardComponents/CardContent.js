import React from 'react';
import './Card.css';

const CardContent = () =>{
    return(
        <div className = "card-content">
            <h1>Get started with React</h1>
            <p class = 'cardp'>React makes it painless to creat interactive UIs. Design simple views for each state in your application.</p>
            <a href="#">reactjs.org</a>
        </div>
    )
};

export default CardContent;