import React, { useState } from 'react'

function Control() {
    const [name,setName]=useState('');
    const handleChange=(event)=>{
        setName(event.target.value);
    }

  return (
    <>
    <input type="text" onChange={handleChange} />
    <h2>{name}</h2>
      
    </>
  )
}

export default Control
