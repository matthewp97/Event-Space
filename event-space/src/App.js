import './App.css';
import './index.css'
import Concerts from './Concerts.js'
import Shows from './Shows';
import Sports from './Sports';
import Navbar from './Navbar.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    return (

        <div className='App'>
            <BrowserRouter>
                <Navbar />
                <Routes className='Routes'>
                    <Route 
                    element = {<Concerts />}
                    path = "/concerts" />
                    <Route 
                    element = {<Shows />}
                    path = "/shows" />
                    <Route 
                    element = {<Sports />}
                    path = "/sports" />
                </Routes>           
            </BrowserRouter>
        </div>
        
    // <div className = "App">
    //     {/* <div>
    //         <Router><Navbar /></Router>
    //     </div> */}
    //     <header className = "App-header">
    //         <h1>Event Space</h1>         
    //     </header>
    //     <div className="Div-2">
    //         <h2>Your key to all the best entertainment in Las Vegas, NV!</h2>
    //     </div>
        

    //     {/* Possibly add forgot password forgot username button */}

    //     <div className = "Events">
    //          <div className="Concerts">
    //             <a href="Concerts.js"><h3>Concerts</h3></a>
    //         </div>
    //         <div className="Sports">
    //             <a href="Sports.jsx"><h3>Sporting Events</h3></a>
    //         </div>
    //         <div className="Shows">
    //             <a href="Shows.jsx"><h3>Shows</h3></a>
    //         </div>
    //         {/* <div>
    //             <Concerts />
    //         </div> */}
    //     </div>
    // </div>
    )
};

export default App;