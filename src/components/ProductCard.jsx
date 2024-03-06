import React from 'react'
import './ProductCard.css'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
const productCard = () => {
  const navigate=useNavigate()
  const id="000000403004"
  return (
    <div className="card">
    <div className="imgBox">
      <img src="/ess.png" alt="mouse corsair" className="mouse" />
    </div>
    <div className="contentBox">
      <h4>Tshirt Ess</h4>
      <h3 className="price">2000.<small>00</small> DA</h3>
      
      <div className='flex'>

      <Button className='buy' variant="contained" onClick={()=>navigate(`design-details/${id}`)}>
        details
      </Button>
      <Button  className="buy" variant="contained"  onClick={()=>navigate(`order-design/${id}`)}>
        order Now
      </Button>
      
      
      </div>
      
    </div>
  </div>

  )
}

export default productCard