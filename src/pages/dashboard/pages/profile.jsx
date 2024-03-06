import React from 'react';
import { Container, Grid, Paper } from '@mui/material';
import SideBare from '../components/sideBare';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import "./../style/profile.css"
import { Link } from 'react-router-dom';
import {IconButton,Button} from '@mui/material';
import myimg from '/your-design.png'

const Profile = () => {
  return (
    <div style={{ height: 'max-content', width: '100%', overflow: 'auto' }}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <SideBare />
        <Box sx={{ flex: 1 }}>
          <Container maxWidth="lg" sx={{ mt: 12, mb: 4 }}>
          <h1 className='text-center mb-5 '>Edit your inforamtions</h1>
          <IconButton className='imgContainer'
                
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={null}
                color="inherit"
              >
                <img src={myimg} alt="my-image"  height="80" width="80"/>
             <span>+</span>   
              </IconButton>
           <div className='myprofile'>
           <TextField id="outlined-basic" label="Name" variant="outlined" />
           <TextField id="outlined-basic" label="Phone" variant="outlined" />
           <TextField id="outlined-basic" label="Adress" variant="outlined" />
           <TextField id="outlined-basic" label="Status" variant="outlined" disabled />
          <div className='btnConatiner'> 
          <Link to="editPassword">reset your password</Link>
          <Button variant="contained" color='primary' >Update</Button>  </div>



           </div>
          </Container>
        </Box>
      </Box>
    </div>
  );
};

export default Profile;
