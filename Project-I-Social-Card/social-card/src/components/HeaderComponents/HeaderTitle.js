import React from 'react';
import './Header.css';
import moment from 'moment';

const HeaderTitle = () =>{
    return(
        <div className = "header-title">
            <h1>Lambda School</h1>
            <h2>@Lambda School &#8729; {moment().format('MMM D')}</h2>
        </div>
    );
};

export default HeaderTitle;