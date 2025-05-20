import React, { useState } from "react";

function App() {
  const[user,setUser]=useState({});
  const[list,setList]=useState([]);

 const handleChange = (e) => {
    const { name, value ,file} = e.target;
    let newUser = { ...user, [name]: value };
    setUser(newUser);
  
  };

 const handleSubmit = (e) => {
    e.preventDefault();
    const id = Date.now();
    const newList = [...list, { ...user, id }];
    setList(newList);
    setUser({}); 
  };
 const handleImage=()=>{
    let file=files[0];
    
  let reader=new FileReader();
  reader.onloadend=()=>{
    let fileData={
      name:file.name,
      type:file.type,
      url:reader.result
    }
    setUser({...user},fileData)
  }
  reader.readAsDataURL(file);
  

 }
  
 console.log(user);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <form action="" method="post" onSubmit={handleSubmit}>
              <h2>Data</h2>

              <div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                  onChange={handleChange}
                  value={user.email || ''}
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                  />
                  
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                   onChange={handleChange}
                   name="password"
                   value={user.password || ""}
                    type="password"
                    className="form-control"
                    id="password"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="" className="form-label">Choose Image</label>
                  <input type="file" 
                  name="file"
                  onChange={handleImage}
                  className="form-label"/>
                </div>
                
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8 mx-auto">
            <table className="table table-stripped">
              <thead>
                <tr>
                  <th>Sr No.</th>
                  <th>Email</th>
                  <th>Password</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  list.map((user,idx)=>{
                    return (
                      <tr key={idx}>
                     <td>{idx + 1}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>{user.file}</td>

                      </tr>
                    )
                  })
                }

              </tbody>

            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
