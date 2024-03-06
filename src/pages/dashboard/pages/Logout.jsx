import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import {logoutStudent } from '../../../store/authSlice';
import { Link,  useNavigate } from 'react-router-dom';


export default function Logout() {
  const auth=useSelector(state=>state.auth)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  
  const handleLogout=()=>{
    dispatch(logoutStudent())
    navigate("./../../SignIn")

  }
  return (
    <div className="flex flex-col justify-center items-center  h-screen"><div className=" flex flex-row justify-center items-center  ">
      <span className='mr-5 '> Login out</span>     <CircularProgress />

    </div>
    
      <div className='mt-20'>
      <Stack direction="row" spacing={2}>

      <Link to="../dashboard/main"><Button className='m-5' variant="contained">Cancel</Button></Link>
      
      <Button variant="contained" color='error' onClick={()=>{handleLogout()}}>Log out</Button>
      </Stack>



      </div></div>
  );
}