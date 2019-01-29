import React from 'react';
import header from './Header.module.css';

const Header = (props) => {
    return(
        <div className={header.Header}>
            <hr className={header.horizontal}/>
            <h1>Graduate Direct Project II 02SP19</h1>
            <button>Edit</button>
            <hr className={header.hrzl}/>
        </div>
    );
};

export default Header;