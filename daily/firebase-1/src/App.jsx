import { getDatabase, ref, set } from 'firebase/database'
import React from 'react'
import { app, db } from '../firebase'

const App = () => {
 
   const handleClick=()=>{
    set(ref(db,'products'),{
      name:"Oil",
      price:100,
    })
      
    }
  return (
    <>
      <button className='btn btn-success' onClick={handleClick}>Store Data</button>
    </>
  )
}

export default App
