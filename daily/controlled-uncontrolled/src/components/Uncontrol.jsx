import React, { useRef, useState, useEffect } from 'react';

function UncontrolledForm() {
  const inputRef = useRef(null);
  const [name, setName] = useState('');

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = () => {
    setName(inputRef.current.value);
    inputRef.current.value='';
  };

  return (
    <>
      <input type="text" ref={inputRef} />
      <br />
      <button onClick={handleSubmit}>Submit</button>
      <h2>{name}</h2>
    </>
  );
}

export default UncontrolledForm;
