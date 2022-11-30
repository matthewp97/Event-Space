import React from 'react';
import {  Link } from "react-router-dom";
import './App.css';
import { useState } from 'react';

const Navbar= () =>{
    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <div>
            <div className='navHeader'>
                <h1><Link to="/">Event Space</Link></h1>
            </div>
            <div className = "Login">
                {loggedIn ? (
                    <h2>Welcome, placeholder!</h2>
                ) : (
                    <h2>Please log in</h2>      
                )}
                <button onClick={() => setLoggedIn(!loggedIn)}>
                    {loggedIn ? "Log out" : "Log in"}
                </button>
            </div>
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