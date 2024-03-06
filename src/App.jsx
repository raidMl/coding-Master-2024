import { useState } from 'react'
import {SignInSide,Home,NotFound}from "./pages/home"

import { BrowserRouter,Route, Routes } from 'react-router-dom';
import {Logout,MainDashboard,MyOrders,OrderDetails,PrivateRoutes,Profile,InscriptionList,Groupe} from "./pages/dashboard"


function App() {
       /// for send it to buying page
  return (
    <main className="app transition-all ease-in">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}  />
      
      
    
    
    

  

     <Route path="signIn" element={<SignInSide/> } />
      
       <Route element={<PrivateRoutes/>} >       {/* private route */}

     <Route path="dashboard/main" element={<MainDashboard/>} exact/>
     <Route path="dashboard/info" element={<MyOrders/>} />
     <Route path="dashboard/InfoDetails/" element={<OrderDetails/>} />
     <Route path="dashboard/groupe" element={<Groupe/>} />
     <Route path="dashboard/iscriptionList" element={<InscriptionList/>} />



  <Route path="dashboard/profile" element={<Profile/>} />

  <Route path="dashboard/logout" element={<Logout/>} />

  <Route path="*" element={<NotFound/>} />


       </Route>

    

    </Routes>
   </BrowserRouter>
 </main>
  )
}

export default App
