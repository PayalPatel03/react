import React from 'react'
import { useDispatch } from 'react-redux'
import { createUser } from '../features/users/thunk'

const Form = () => {
    const obj = {
        name : "Dev Naik",
        age : 10,
        gender : "male",
    }
    const dispatch = useDispatch()

  return (
    <>
      <button className='btn btn-success' onClick={()=> dispatch(createUser(obj))}>Add Data</button>
    </>
  )
}

export default Form