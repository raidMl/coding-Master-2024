import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { useGetOneUserNoteQuery } from '../../../store/ordersApi';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  const { data: orders, isLoading, isSuccess, isError, error } = useGetOneUserNoteQuery();
  const auth = useSelector(state => state.auth);

  // Calculate total price
  let total = 0;
  if (isSuccess && auth._id && auth.role && orders) {
    orders.forEach(item => {
      total += Number(item.price);
    });
  }

  if (isLoading && auth._id) {
    return (
      <div className='flex  justify-center items-center  h-screen'>
        <p className=' mr-5'>Loading...</p>
        <p><CircularProgress /></p>
      </div>
    );
  } else if (isError) {
    return <p>{error}</p>;
  } else if (isSuccess && auth._id && auth.role) {
    // Get the current date
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
    const year = currentDate.getFullYear();

    return (
      <React.Fragment>
        <Title>Recent Deposits</Title>
        <Typography component="p" variant="h4">
          {total.toFixed(2)} DA {/* Display total price */}
        </Typography>
        <Typography color="text.secondary" sx={{ flex: 1 }}>
          {`${day}/${month}/${year}`}
        </Typography>
        <div>
          <Link className="text-blue-700 hover:underline" to="../dashboard/orders">
            View orders
          </Link>
        </div>
      </React.Fragment>
    );
  }
}
