import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import EventTableRow from "./EventTableRow";
  
const EventList = () => {
  const [events, setEvents] = useState([]);
  
  useEffect(() => {
    axios
      .get("http://localhost:4000/events/")
      .then(({ data }) => {
        setEvents(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  const DataTable = () => {
    return events.map((res, i) => {
      return <EventTableRow obj={res} key={i} />;
    });
  };
  
  return (
    <div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Roll No</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{DataTable()}</tbody>
      </Table>
    </div>
  );
};
  
export default EventList;