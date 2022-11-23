import React from 'react';
import {  Link } from "react-router-dom";
import './App.css';

const Navbar= () =>{
    return (
        <div>
            <h1>Event Space</h1>
            <div className='pageLinks'>
                <li>
                    <Link to="/concerts">Concerts</Link>
                </li>
                <li>
                    <Link to="/shows">Shows</Link>
                </li>
                <li>
                    <Link to="/sports">Sports</Link>
                </li>
            </div>
        </div>
    );
};

export default Navbar;