import React, { useState } from 'react';
import './Loginpage.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Loginpage = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const onHandleRegister = () => {
    navigate('/register');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/home');
  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='containerlogin'>
        <p style={{fontSize:'20px',fontWeight:'bold',fontFamily:"Calibri",textAlign:'center'}}>LOGIN</p>
          <div>
            <label>Email</label>
            <input type='email' onChange={(event) => { setUsername(event.target.value) }} required />
          </div>
          <div>
            <label>Password</label>
            <input type='password' required />
          </div>
          <div>
            <Button variant="contained" type='submit'>Login</Button>
          </div>
          <div>
            Don't Have an Account?
            <Button variant="outlined" style={{ marginLeft: '5px' }} onClick={onHandleRegister}>Register</Button>
          </div>
        </div>
      </form>
        <p style={{paddingLeft:'575px',height:'100px', width:'100%',backgroundColor:'#363A57',color:'white',marginTop:'160px',position:'fixed'}}>Copyright © 2012 - 2023 TermsFeed®. All rights reserved.</p>

    </>
  );
};

export default Loginpage;
