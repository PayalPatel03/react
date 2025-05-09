import React, { useState } from 'react';

const Form = () => {
  const [user, setUser] = useState({});
  const [list, setList] = useState([]);
  const [editId, setEditId] = useState(-1); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId !== -1) {
      const updatedList = list.map((item) =>
        item.id === editId ? { ...user, id: editId } : item
      );
      setList(updatedList);
      setEditId(-1); 
    } else {
      const id = Date.now();
      setList([...list, { ...user, id }]);
    }

    setUser({});
  };

  const handleDelete = (id) => {
    const data = list.filter((item) => item.id !== id);
    setList(data);
  };

  const handleEdit = (id) => {
    const selectedUser = list.find((item) => item.id === id);
    setUser({ ...selectedUser });
    setEditId(id); 
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <form method="post" onSubmit={handleSubmit}>
              <h2>Sign-up</h2>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  id="username"
                  name="username"
                  value={user.username || ""}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
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
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  onChange={handleChange}
                  className="form-control"
                  id="password"
                  name="password"
                  value={user.password || ""}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                {editId !== -1 ? 'Update' : 'Submit'}
              </button>
            </form>
          </div>

          <table className="table table-secondary mt-5">
            <thead>
              <tr>
                <th>#</th>
                <th>Username</th>
                <th>Email</th>
                <th>Password</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {list.map((ele, idx) => (
                <tr key={ele.id}>
                  <td>{idx + 1}</td>
                  <td>{ele.username}</td>
                  <td>{ele.email}</td>
                  <td>{ele.password}</td>
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Form;
