import React from 'react'
import './buttons.css'



const Buttons = ({value, handler}) =>(
  <div className='calc_buttons' onClick = {() => handler (value)}> 
    
    {value}

  </div>
)

export default Buttons