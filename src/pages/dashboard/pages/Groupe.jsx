import React from 'react';
import { Container, Grid, Paper } from '@mui/material';
import Chart from '../components/Chart';
import Deposits from '../components/Deposits';
import SideBare from '../components/sideBare';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Groupe = () => {
    const auth=useSelector(state=>state.auth)

    const fetchData = async () => {
        try {
          // Retrieve the token from your desired source (e.g., Redux store, localStorage)
          const token = auth.token;
          const id=auth.uuid
  
          // Set the Authorization header with the token value
          const config = {
            headers: {
              Authorization: `${token}`,
            },
          };
  
          // Make the GET request with the configured header
          const response = await axios.get(`https://progres.mesrs.dz/api/infos/bac/${id}/notes`, config);
          console.log(response)
        } catch (error) {
       console.log(error)
        }
      };
  
      fetchData();
    
    
      
  return (
    <div style={{ height: 'max-content', width: '100%', overflow: 'auto' }}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <SideBare />
        <Box sx={{ flex: 1 }}>
          <Container maxWidth="lg" sx={{ mt: 12, mb: 4 }}>
            <Grid container spacing={3}>
            
          
            </Grid>
          </Container>
        </Box>
      </Box>
    </div>
  );
};

export default Groupe;
