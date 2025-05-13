import React, { useEffect, useRef, useState } from "react";

const Form = () => {
  const [user, setUser] = useState({});
  const [list, setList] = useState([]);
  const [editIdx, setEditIdx] = useState(-1);
  const editRef = useRef();
  const focusRef = useRef();

  useEffect(() => {
    let oldList = JSON.parse(localStorage.getItem("users")) || [];
    setList(oldList);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newUser = { ...user, [name]: value };
    setUser(newUser);
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  const id = Date.now();

  if (editIdx === -1) {
    const newList = [...list, { ...user, id }];
    setList(newList);
    localStorage.setItem("users", JSON.stringify(newList));
  } else {
    let arr = list.map((val) => {
      return val.id === editIdx ? { ...user, id: editIdx } : val;
    });
    setList(arr);
    localStorage.setItem("users", JSON.stringify(arr));
    setEditIdx(-1);
    editRef.current.innerText = "Submit";
  }

  setUser({});
};


  const handleDelete = (id) => {
    let data = list.filter((data) => data.id !== id);
        localStorage.setItem("users", JSON.stringify(data));
    setList(data);
  };

  const handleEdit = (id) => {
    let data = list.filter((data, idx) => data.id == id)[0];
    setUser(data);
    setEditIdx(id);
    editRef.current.innerText = "Update";
    focusRef.current.focus();
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <form method="post" onSubmit={handleSubmit}>
              <h2>Login Form</h2>
              <div className="mb-3">
                <label htmlFor="Username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  id="username"
                  name="username"
                  value={user.username || ""}
                  ref={focusRef}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  onChange={handleChange}
                  className="form-control"
                  id="email"
                  name="email"
                  value={user.email || ""}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  onChange={handleChange}
                  className="form-control"
                  id="password"
                  name="password"
                  value={user.password || ""}
                />
              </div>
              {/* Hobby */}
              <div>
                <label className="form-label fw-bold">Hobby</label>
                <div className="mb-3">
                  <div className="form-check form-check-inline ">
                    <label className="form-check-label" htmlFor="hobby1">
                      Cooking
                    </label>
                    <input
                      className="form-check-input "
                      name="hobby"
                      type="checkbox"
                      defaultValue="Cooking"
                      id="hobby1"
                    />
                  </div>
                  <div className="form-check form-check-inline">
                    <label className="form-check-label" htmlFor="hobby2">
                      Reading
                    </label>
                    <input
                      className="form-check-input"
                      name="hobby"
                      type="checkbox"
                      defaultValue="Reading"
                      id="hobby2"
                    />
                  </div>

                  <div className="form-check form-check-inline">
                    <label className="form-check-label" htmlFor="hobby3">
                      Gardening
                    </label>
                    <input
                      className="form-check-input"
                      name="hobby"
                      type="checkbox"
                      defaultValue="Gardening"
                      id="hobby3"
                    />
                  </div>
                </div>
              </div>

              {/* gender */}
              <div>
                <label htmlFor="gender" className="form-label fw-bold">
                  Gender
                </label>
                <div className="mb-3 ">
                  <div className="form-check form-check-inline">
                    <label htmlFor="gender1" className="form-check-label">
                      Male
                    </label>
                    <input
                      type="radio"
                      defaultValue="Male"
                      name="gender"
                      id="gender1"
                      className="  form-check-input"
                    />
                  </div>
                  <div className="form-check form-check-inline">
                    <label htmlFor="gender2" className="form-check-label">
                      Female
                    </label>
                    <input
                      type="radio"
                      defaultValue="Female"
                      name="gender"
                      id="gender2"
                      className="form-check-input"
                    />
                  </div>
                </div>
              </div>

              <button ref={editRef} type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <table className="table table-bordered mt-5">
           
            <thead>
              <tr>
                <th>#</th>
                <th>Username</th>
                <th>Email</th>
                <th>Password</th>
                <th>Hobbies</th>
                <th>Gender</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {list.map((ele, idx) => {
                return (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{ele.username}</td>
                    <td>{ele.email}</td>
                    <td>{ele.password}</td>
                    <td>{ele.hobby}</td>
                    <td>{ele.gender}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(ele.id)}
                        className="btn btn-danger me-2"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => handleEdit(ele.id)}
                        className="btn btn-warning"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Form;
