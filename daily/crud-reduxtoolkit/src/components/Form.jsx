import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../features/user/userSlice";

const Form = () => {

    const [user, setUser] = useState({});
    const dispatch = useDispatch()

    const handleChange = (e)=>{
        let {name,value} = e.target;
        let data = {...user,[name]:value};
        setUser(data); 
    }


    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(createUser(user))
        setUser({})
    }
    


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <h1 className="my-5">Sign-Up</h1>
            <form method="post" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  value={user.email || ''}
                  onChange={handleChange}
                  className="form-control"
                  id="exampleInputEmail1"

                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={user.password || ''}
                  onChange={handleChange}
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;