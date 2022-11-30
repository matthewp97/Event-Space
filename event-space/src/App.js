import './App.css';
import './index.css'
import Main from './Main';
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
                    element = {<Main />}
                    path = "/" />
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

    )
};

export default App;