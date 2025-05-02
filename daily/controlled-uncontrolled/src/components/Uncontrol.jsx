import React, { useRef } from 'react';

function UncontrolledForm() {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Input value: ${inputRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <br/>
      <button   onClick={handleSubmit} type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForm;

