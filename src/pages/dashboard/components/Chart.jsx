import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, axisClasses } from '@mui/x-charts';
import { useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import Title from './Title';
import { useGetAllUserInfoQuery } from '../../../store/ordersApi';
import { Zoom } from '@mui/material';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount: amount ?? null };
}

export default function Chart() {
  const theme = useTheme();
  const { data: orders, isLoading, isSuccess, isError, error } = useGetAllUserInfoQuery();
  const auth = useSelector(state => state.auth);

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
    const generateLastMonthData = () => {
      const currentDate = new Date();
      const lastMonthData = [];
      
      // Get the last month
      const lastMonth = currentDate.getMonth();
      const lastMonthYear = currentDate.getFullYear();
      
      // Get the number of days in the last month
      const daysInLastMonth = new Date(lastMonthYear, lastMonth + 1, 0).getDate();

      // Initialize an object to store total prices for each day
      const totalPriceByDay = {};

      // Iterate through the days of the last month
      for (let i = 1; i <= daysInLastMonth; i++) {
        // Format date as needed (e.g., 'yyyy-MM-dd')
        const formattedDate = `${lastMonthYear}-${(lastMonth + 1).toString().padStart(2, '0')}-${i.toString().padStart(2, '0')}`;

        // Initialize total price for the day
        totalPriceByDay[formattedDate] = 0;

        // Accumulate total price for each order on this day
        orders.forEach(order => {
          const orderDate = new Date(order.updatedAt);
          const orderFormattedDate = `${orderDate.getFullYear()}-${(orderDate.getMonth() + 1)
            .toString()
            .padStart(2, '0')}-${orderDate.getDate().toString().padStart(2, '0')}`;

          if (orderFormattedDate === formattedDate) {
            totalPriceByDay[formattedDate] += Number(order.price);
          }
        });

        // Create data object for the day
        lastMonthData.push(createData(formattedDate, totalPriceByDay[formattedDate]));
      }

      return lastMonthData;
    };

    const lastMonthData = generateLastMonthData();

    return (
      <React.Fragment>
        <Title>Last Month</Title>
        <div style={{ width: '100%', flexGrow:1 , overflow: 'auto' } }>
          <LineChart 
            dataset={lastMonthData}
            margin={{
              top: 16,
              right: 20,
              left: 70,
              bottom: 30,
              
            }}
            xAxis={[
              {
                scaleType: 'point',
                dataKey: 'time',
                tickNumber: 2,
                tickLabelStyle: theme.typography.body2,
              },
            ]}
            yAxis={[
              {
                label: 'Sales (DA)',
                labelStyle: {
                  ...theme.typography.body1,
                  fill: theme.palette.text.primary,
                },
                tickLabelStyle: theme.typography.body2,
                max: 100000,
                tickNumber: 3,
                
              },
            ]}
            series={[
              {
                dataKey: 'amount',
                showMark: false,
                color: theme.palette.primary.light,
              },
            ]}
            sx={{
              [`.${axisClasses.root} line`]: { stroke: theme.palette.text.secondary },
              [`.${axisClasses.root} text`]: { fill: theme.palette.text.secondary },
              [`& .${axisClasses.left} .${axisClasses.label}`]: {
                transform: 'translateX(-25px)',
              },
            }}
          />
        </div>
      </React.Fragment>
    );
  }
}
