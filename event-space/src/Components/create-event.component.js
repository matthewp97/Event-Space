import React, { useState, useEffect } from "react";
import axios from 'axios';
import EventForm from "./EventForm";
  
const CreateEvent = () => {
  const [formValues, setFormValues] = 
    useState({ name: '', email: '', rollno: '' })
  const onSubmit = eventObject => {
    axios.post(
'http://localhost:3000/events/create-event', 
    eventObject)
      .then(res => {
        if (res.status === 200)
          alert('Event successfully created')
        else
          Promise.reject()
      })
      .catch(err => alert('Something went wrong'))
  }
    
  return(
    <EventForm initialValues={formValues} 
      onSubmit={onSubmit} 
      enableReinitialize>
      Create Event
    </EventForm>
  )
}
  
export default CreateEvent