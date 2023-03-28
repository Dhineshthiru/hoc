import React, { useState } from 'react'
import UpdatedComponent from './Hoc';

function Person1({money, handleIncrease}) {
    
    
  return (
    <div>
      <h2>Vijay is offering ${money}</h2>
      <button onClick={handleIncrease}>Increase Amount</button>
    </div>
  )
}

export default UpdatedComponent(Person1);