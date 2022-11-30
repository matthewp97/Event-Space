import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
  
const EventTableRow = (props) => {
  const { _id, name, email, rollno } = props.obj;
  
  const deleteEvent = () => {
    axios
      .delete(
"http://localhost:4000/events/delete-event/" + _id)
      .then((res) => {
        if (res.status === 200) {
          alert("Event successfully deleted");
          window.location.reload();
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };
  
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{rollno}</td>
      <td>
        <Link className="edit-link" 
          to={"/edit-event/" + _id}>
          Edit
        </Link>
        <Button onClick={deleteEvent} 
          size="sm" variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
};
  
export default EventTableRow;