import React, { useState, useEffect } from "react";
import axios from 'axios';
import EventForm from "./EventForm";
  
// CreateEvent Component
const CreateEvent = () => {
  const [formValues, setFormValues] = 
    useState({ name: '', email: '', rollno: '' })
  // onSubmit handler
  const onSubmit = eventObject => {
    axios.post(
'http://localhost:4000/events/create-event', 
    eventObject)
      .then(res => {
        if (res.status === 200)
          alert('Event successfully created')
        else
          Promise.reject()
      })
      .catch(err => alert('Something went wrong'))
  }
    
  // Return Event form
  return(
    <EventForm initialValues={formValues} 
      onSubmit={onSubmit} 
      enableReinitialize>
      Create Event
    </EventForm>
  )
}
  
// Export CreateEvent Component
export default CreateEvent