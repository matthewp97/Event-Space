import './App.css';
import './index.css'

function App() {
    return (
    <div className = "App">
        <header className = "App-header">
            <h1>Event Space</h1>         
        </header>
        <div className="Div-2">
            <h2>Your key to all the best entertainment in Las Vegas, NV!</h2>
        </div>
        <div className = "Events">
             <div className="Concerts">
             <a href="Concerts.jsx"><h3>Concerts</h3></a>
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