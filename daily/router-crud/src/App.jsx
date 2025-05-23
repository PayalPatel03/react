import React, { useState } from 'react'
import Header from './components/Header'
import Employee from './components/Employee'

function App() {
    const [employee, setEmployee] = useState({});
    const [empList, setEmpList] = useState([]);

    const handleChange=()=>{
      const{name,value}=empList.target;
      setEmployee({...employee,[name]:value});
    }

    
  return (
    <>
    <Header/>
      <Employee/>
    </>
  )
}

export default App
