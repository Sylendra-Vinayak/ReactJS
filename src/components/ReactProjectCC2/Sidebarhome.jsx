import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';

const SidebarHome = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();

  const sidebarStyle = {
    width: '250px',

    
  };

  const listItemStyle = {
    paddingLeft:"20px"
  };
  const goInfo = () => {
    navigate('/go');
    toggleSidebar();
  };

  const goacademics=()=>{
    navigate('/Patients');
    toggleSidebar();
  }
  const goexams=()=>{
    navigate('/exams');
    toggleSidebar();
  }

  const goplacement=()=>{
    navigate('/Aboutus');
    toggleSidebar();
  }
  const goabout=()=>{
    navigate('/Contact');
    toggleSidebar();
  }
  return (
    <>
    <Drawer variant="temporary" anchor="left" open={isOpen} onClose={toggleSidebar}>
      <div style={sidebarStyle}> 
          <div >
            <PersonIcon style={{height:'70px',width:'70px',border:'2px solid ',backgroundColor:'#EDE8D5',borderRadius:'25%',marginLeft:'90px'}}></PersonIcon></div>
        <List>
          <ListItem button onClick={goInfo} style={listItemStyle}>
            <ListItemText primary="Book an Appointment" />
          </ListItem>
          
          <ListItem button  onClick={goexams} style={listItemStyle}>
            <ListItemText primary="Your Appointments" />
          </ListItem>
          <ListItem button onClick={goplacement} style={listItemStyle}>
            <ListItemText primary="About Us" />
          </ListItem>
          <ListItem button  onClick={goacademics} style={listItemStyle}>
            <ListItemText primary="Patients" />
          </ListItem>
          <ListItem button  onClick={goabout} style={listItemStyle}>
            <ListItemText primary="Contact us" />
          </ListItem>
        </List>
      </div>
      </Drawer>
      </>
  );
};

export default SidebarHome;
