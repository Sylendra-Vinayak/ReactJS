import React from 'react';
import {exams}   from '../../SharedData';
import { Button } from '@mui/material';
const ExamList = () => {

  

  return (
    <>
        <div style={{ marginLeft: '100px', marginRight: '100px', border: '5px solid #ccc', padding: '20px' ,borderRadius:'10px',marginTop:'100px'}}>
        <p style={{fontSize:'20px'}}><strong>Welcome to the Appointments section.</strong> Here, you can view your upcoming appointments.
        If you have booked an appointment but haven't seen any in this section, Please Proceed to "Book an Appointment"
        section to verify your login status.</p>
      <h2>Your Appointments</h2>
      <ul>
        {exams.map((exam) => (
          <li key={exam.id} style={{marginTop:'10px'}}>
            <span>{exam.name}</span>
            <Button style={{marginLeft:'20px'}} variant='contained'>CANCEL</Button>
          </li>
        ))}
      </ul>
    </div>
      </>
  );
};

export default ExamList;
