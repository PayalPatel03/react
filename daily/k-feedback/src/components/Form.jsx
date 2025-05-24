import React, { useEffect, useRef, useState } from "react";
import { FaStar } from "react-icons/fa";

const Form = () => {
  const [user, setUser] = useState({});
  const [list, setList] = useState([]);
  const [editIdx, setEditIdx] = useState(-1);
  const editRef = useRef();
  const focusRef = useRef();
  const [hovered, setHovered] = useState(0);
  const [star, setStar] = useState(0);

  useEffect(() => {
    let oldList = JSON.parse(localStorage.getItem("users")) || [];
    setList(oldList);
  }, []);

  const handleHover = (index) => {
    setHovered(index);
  };

  const handleLeave = () => {
    setHovered(0);
  };

  const handleStarClick = (index) => {
    setStar(index);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Date.now();

    const newUser = { ...user, star };

    if (editIdx === -1) {
      const newList = [...list, { ...newUser, id }];
      setList(newList);
      localStorage.setItem("users", JSON.stringify(newList));
    } else {
      const updatedList = list.map((item) =>
        item.id === editIdx ? { ...newUser, id: editIdx } : item
      );
      setList(updatedList);
      localStorage.setItem("users", JSON.stringify(updatedList));
      setEditIdx(-1);
      editRef.current.innerText = "Submit";
    }

    setUser({ username: "", email: "", password: "", gender: "" });
    setStar(0);
  };

  const handleDelete = (id) => {
    const filtered = list.filter((item) => item.id !== id);
    setList(filtered);
    localStorage.setItem("users", JSON.stringify(filtered));
  };

  const handleEdit = (id) => {
    const data = list.find((item) => item.id === id);
    setUser({});
    setStar(data.star || 0);
    setEditIdx(id);
    editRef.current.innerText = "Update";
    focusRef.current.focus();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <form method="post" onSubmit={handleSubmit}>
            <h2 className="fw-bold text-white">Feedback Form</h2>

            <div className="mb-3">
              <label htmlFor="username" className="form-label text-white">Name</label>
              <input
                type="text"
                onChange={handleChange}
                className="form-control"
                id="username"
                name="username"
                value={user.username}
                ref={focusRef}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label text-white">Email</label>
              <input
                type="email"
                onChange={handleChange}
                className="form-control"
                id="email"
                name="email"
                value={user.email}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label text-white">Enrollment No.</label>
              <input
                type="text"
                onChange={handleChange}
                className="form-control"
                id="password"
                name="password"
                value={user.password}
              />
            </div>

            {/* Gender */}
            <div>
              <label className="form-label text-white fw-bold">Gender</label>
              <div className="mb-3">
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    value="Male"
                    name="gender"
                    className="form-check-input"
                    checked={user.gender === "Male"}
                    onChange={handleChange}
                    id="gender1"
                  />
                  <label htmlFor="gender1" className="form-check-label text-white">Male</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    value="Female"
                    name="gender"
                    className="form-check-input"
                    checked={user.gender === "Female"}
                    onChange={handleChange}
                    id="gender2"
                  />
                  <label htmlFor="gender2" className="form-check-label text-white">Female</label>
                </div>
              </div>
            </div>

            {/* Star Rating */}
            <div className="mb-3">
              <label className="form-label text-white fw-bold">Review</label>
              <div>
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    onMouseOver={() => handleHover(index + 1)}
                    onMouseLeave={handleLeave}
                    onClick={() => handleStarClick(index + 1)}
                    color={hovered > index || star > index ? "gold" : "gray"}
                    size={24}
                    style={{ cursor: "pointer" }}
                  />
                ))}
              </div>
            </div>

            <button ref={editRef} type="submit" className="btn btn-primary mt-3">
              Submit
            </button>
          </form>
        </div>

        {/* Data Table */}
        <table className="table table-bordered mt-5">
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Email</th>
              <th>Enroll-No.</th>
              <th>Gender</th>
              <th>Review</th>
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
                <td>{ele.gender}</td>
                <td>
                  {[...Array(ele.star || 0)].map((_, i) => (
                    <FaStar key={i} color="gold" />
                  ))}
                </td>
                <td>
                  <button onClick={() => handleDelete(ele.id)} className="btn btn-danger me-2">
                    Delete
                  </button>
                  <button onClick={() => handleEdit(ele.id)} className="btn btn-warning">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Form;
