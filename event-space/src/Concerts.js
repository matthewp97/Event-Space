import React from 'react';
import CreateEvent from './Components/create-event.component';
import EditEvent from './Components/edit-event.component';
import EventList from './Components/event-list.component';
// import EventForm from './Components/EventForm';
import { Nav, Container, Row, Col } from 'react-bootstrap';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";


const Concerts = () => {
    return (
        <div>
            <h3>Stay up to date with all the best parties in Sin City!</h3>
            <div>
                <img height="500px" width="700px" src='./concert-pic.jpg' />
            </div>
            <Container>
                <Nav className="justify-content-end">
                    <Link to={"/create-event"}
                    className="nav-link">
                        Create Event
                    </Link>
                </Nav>
                <Nav>
                  <Link to={"/event-list"} 
                    className="nav-link">
                    Event List
                  </Link>
                </Nav>
            </Container>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="wrapper">
                            <Routes>                                    <Route exact path="/" 
                                    component={CreateEvent} />
                                <Route path="/create-event" 
                                    component={CreateEvent} />
                                <Route path="/edit-event/:id" 
                                    component={EditEvent} />
                                <Route path="/event-list" 
                                    component={EventList} />
                            </Routes>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>     
    )
};

export default Concerts;