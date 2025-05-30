import React from 'react';

function App() {

  const handleFetch = () => {
    fetch('http://localhost:3000/posts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      console.log("data fetched");
      return res.json();
    }).then((data) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    });
  };

  const handleAddData = () => {
    let obj = {
      name: 'acb',
      age: 22
    };

    fetch('http://localhost:3000/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    }).then((res) => {
      console.log("data added");
      return res.json();
    }).then((data) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    });
  };

  return (
    <>
      <button className='btn btn-primary' onClick={handleFetch}>Fetch Data</button>
      <button className='btn btn-primary' onClick={handleAddData}>Add Data</button>
    </>
  );
}

export default App;
