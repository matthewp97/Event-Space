import './App.css';
import './index.css'
import './Concerts.js'
import { Link } from "react-router-dom";
import { useState } from 'react';

function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    return (
    <div className = "App">
        <header className = "App-header">
            <h1>Event Space</h1>         
        </header>
        <div className="Div-2">
            <h2>Your key to all the best entertainment in Las Vegas, NV!</h2>
        </div>
        <div className = "Login">
            <button onClick={() => setLoggedIn(!loggedIn)}>
                {loggedIn ? "Log out" : "Log in"}
            </button>
                {loggedIn ? (
                    <h2>Welcome, person's name!</h2>
                ) : (
                    <div>
                        <h2>Please log in</h2>
                    </div>
                )}
        </div>
        <div className = "Events">
             <div className="Concerts">
                <a href="Concerts.js"><h3>Concerts</h3></a>
            </div>
            <div className="Sports">
                <a href="Sports.jsx"><h3>Sporting Events</h3></a>
            </div>
            <div className="Shows">
            <a href="Shows.jsx"><h3>Shows</h3></a>
            </div>
        </div>
    </div>
    )
}

export default App;