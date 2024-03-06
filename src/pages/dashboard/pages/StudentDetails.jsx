import React, { useEffect } from 'react';
import { Card, CardContent, CardMedia, Container, Grid, Typography, Button } from '@mui/material';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import CircularProgress from '@mui/material/CircularProgress';
import SideBare from '../components/sideBare';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useGetOneUserNoteQuery } from '../../../store/ordersApi';
import { fetchStudentInfo } from '../../../store/infoSlice';
const StudentDetails = () => {
  const dispatch = useDispatch();
  const auth=useSelector(state=>state.auth)
  const orderId=auth.uuid
  const { data: studentInfo, isLoading, isError } = useGetOneUserNoteQuery(orderId); // Assuming '3e8e296b-f5dc-483d-97fb-5f7c26126efe' is the user ID

  useEffect(() => {
    dispatch(fetchStudentInfo()); // Dispatch the StudentInfo action to fetch the student information
  }, [dispatch]);

  if (isLoading) {
    return <CircularProgress />; // Show loading spinner while fetching data
  }

  if (isError) {
    return <div>Error occurred while fetching student information</div>; // Show error message if fetching data fails
  }

  return (
    <div style={{ height: '100%', width: '100%', overflow: 'auto' }}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <SideBare />
        <Box sx={{ flex: 1 }}>
          <Container maxWidth="lg" sx={{ mt: 20, mb: 4, ml: 2 }}>
            <Grid container spacing={3}>
              <Grid item xs={11} md={6} lg={8} id="print-content">
                <Card className={classes.card}>
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                      Information Details
                    </Typography>
                    <Typography variant='body2' color='textSecondary' component='p'>
                      Student Name: {studentInfo.nomFr} {studentInfo.prenomFr}
                    </Typography>
                    <Typography variant='body2' color='textSecondary' component='p'>
                      Date of Birth: {studentInfo.dateNaissance}
                    </Typography>
                    {/* Display other student information as needed */}
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={11} md={5} lg={4}>
                <img src="/qrcode.png" alt="" id="print-content"/>
                <Button variant="contained" sx={{ mt: 3 }} onClick={() => { window.print() }}>
                  Print
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </div>
  );
};

export default StudentDetails;
