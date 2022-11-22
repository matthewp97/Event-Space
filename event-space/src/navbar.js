import React from 'react';
import {  Link } from "react-router-dom";

const navbar= () =>{
    return (
        <div>
            <li>
                <Link to="/Concerts">Concerts</Link>
            </li>
            <li>
                <Link to="/Shows">Shows</Link>
            </li>
            <li>
                <Link to="/Sports">Sports</Link>
            </li>
        </div>
    )
}

export default navbar