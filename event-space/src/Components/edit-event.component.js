import React, { useState, useEffect } from "react";
import axios from "axios";
import EventForm from "./EventForm";
  
// EditEvent Component
const EditEvent = (props) => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    rollno: "",
  });
    
  //onSubmit handler
  const onSubmit = (eventObject) => {
    axios
      .put(
        "http://localhost:3000/event/update-event/" +
          props.match.params.id,
        eventObject
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Event successfully updated");
          props.history.push("/event-list");
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };
  
  // Load data from server and reinitialize event form
  useEffect(() => {
    axios
      .get(
        "http://localhost:3000/events/update-event/" 
        + props.match.params.id
      )
      .then((res) => {
        const { name, email, rollno } = res.data;
        setFormValues({ name, email, rollno });
      })
      .catch((err) => console.log(err));
  }, []);
  
  // Return event form
  return (
    <EventForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Update Event
    </EventForm>
  );
};
  
// Export EditEvent Component
export default EditEvent;