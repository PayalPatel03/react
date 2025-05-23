import React, { useState } from 'react';
import Header from './components/Header';
import Employee from './components/Employee';

function App() {
  const [employee, setEmployee] = useState({  }); 
  const [empList, setEmpList] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    setEmpList([...empList, { ...employee, id: Date.now() }]);
    setEmployee({  }); 
    
  };

  return (
    <>
      <Header />
      <Employee
        employee={employee}
        empList={empList}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
}

export default App;
