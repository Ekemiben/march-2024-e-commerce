import React from 'react'
import './items.css'
const Items = (props) => {
  return (
    <div className='item'>
        <img src={props.image}
         alt='' />
         <p>{props.name}</p>
         <div className='item-price'>
            <div className='item-price-new'></div>
         </div>
      
    </div>
  )
}

export default Items
