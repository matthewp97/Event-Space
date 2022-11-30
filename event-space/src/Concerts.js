import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Concerts = () => {
    return (
        <div>
            <h3>Stay up to date with all the best parties in Sin City!</h3>
            <div>
                <img height="500px" width="700px" src='./concert-pic.jpg' />
            </div>
            <Nav className="justify-content-end">
                <Link to={"/create-event"}
                className="nav-link">
                    Create Event
                </Link>
            </Nav>
        </div>        
    )
};

export default Concerts;