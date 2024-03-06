import React from 'react'
import { useSelector } from 'react-redux';
import { Outlet,Navigate, } from 'react-router-dom'

const PrivateRoutes = () => {
const auth=useSelector(state=>(state.auth))    
    console.log("token"+auth.token);

  return (
        // ((auth._id)&& (auth.role=="seller"))? <Outlet/>: <Navigate to={'signIn'}/>

      auth.token? <Outlet/>:<Navigate to={'signIn'}/> 
    )
}

export default PrivateRoutes