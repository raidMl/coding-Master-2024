import React from 'react';
import { Container, Grid, Paper } from '@mui/material';
import Chart from '../components/Chart';
import Deposits from '../components/Deposits';
import SideBare from '../components/sideBare';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

const inscriptionList = () => {
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

export default inscriptionList;
