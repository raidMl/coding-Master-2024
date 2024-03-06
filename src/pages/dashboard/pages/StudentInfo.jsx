import React,{useState} from 'react';
import { Checkbox, Container, Grid, Paper } from '@mui/material';
import SideBare from '../components/sideBare';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
 import CircularProgress from '@mui/material/CircularProgress';
 import Button from '@mui/material/Button';
 
 import "./../style/Myorders.css"
import { Link, Navigate, useNavigate } from 'react-router-dom';
import {  useSelector } from 'react-redux';
import { useGetOneUserNoteQuery} from '../../../store/ordersApi'


const StudentInfo = () => {
  const [searchVal,setSearchVal]=useState('')
 
  const auth = useSelector((state) => state.auth);
  const userId=auth.uuid
  console.log("token"+auth.token)
  const { data: order, isLoading, isSuccess, isError, error } = useGetOneUserNoteQuery(userId);
  if (isLoading && auth.uuid) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <p className='mr-5'>Loading...</p>
        <CircularProgress />
      </div>
    );
  } else if (isError) {
    return <p>{error}</p>;
  } else if (isSuccess &&  auth.uuid  ) {
    console.log(order);
    
  
    return(
      <div style={{ height: '100%', width: '100%', overflow: 'auto' }}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <SideBare />
        <Box sx={{ flex: 1 }}>
          <Container maxWidth="lg" sx={{ mt: 20, mb: 4,ml:2 }}>
          <Grid container spacing={3}>
            <Grid item xs={11} md={6} lg={8} id="print-content">
                      <Card className={classes.card}>
          <CardMedia className={classes.media} image={order.logo} title='Order Logo' />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Order Details
            </Typography>
            {order.map(item=>
            <Typography variant='body2' color='textSecondary' component='p'>
              {item.refCodeMatiereLibelleFr}: {item.note}
            </Typography>)}
            
          </CardContent>
        </Card>
     
   
    </Grid>
    <Grid item xs={11} md={5} lg={4}>
<img src="/qrcode.png" alt="" id="print-content"/>
<Button variant="contained" sx={{mt:3}} onClick={()=>{window.print()}}  >
  Print
</Button>
</Grid>

    </Grid>
          </Container>
        </Box>
      </Box>
      </div>
    )
}}

export default StudentInfo;
