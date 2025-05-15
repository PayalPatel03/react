import React, { useState, useRef } from "react";

function App() {
  const [employee, setEmployee] = useState({});
  const [empList, setEmpList] = useState([]);
  const [editIdx, setEditIdx] = useState(-1);
  const editRef = useRef();
  const focusRef = useRef();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      let updatedCount = employee.count || [];

      if (checked) {
        updatedCount = [...updatedCount, value];
      } else {
        updatedCount = updatedCount.filter((item) => item !== value);
      }

      setEmployee({ ...employee, [name]: updatedCount });
    } else {
      setEmployee({ ...employee, [name]: value });
    }
  };

  console.log(employee);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIdx !== -1) {
      const updatedList = empList.map((item) =>
        item.id === editIdx ? { ...employee, id: editIdx } : item
      );
      setEmpList(updatedList);
      setEditIdx(-1);
    } else {
      setEmpList([...empList, { ...employee, id: Date.now() }]);
    }

    setEmployee({});
  };

  const handleDelete = (id) => {
    console.log(id);

    let data = empList.filter((data) => data.id !== id);
    setEmpList(data);
  };

  const handleEdit = (id) => {
    let data = empList.filter((data, idx) => data.id == id)[0];
    setEmployee(data);
    setEditIdx(id);
    editRef.current.innerText = "Update";
    focusRef.current.focus();
  };

  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-md-4 mx-auto ">
            <form method="post" onSubmit={handleSubmit}>
              <h2>Magagement Info</h2>
              <div className="mb-3">
                <label htmlFor="ename" className="form-label">
                  Employee Name
                </label>
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  id="ename"
                  name="ename"
                  value={employee.ename || ""}
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="salary" className="form-label">
                  Salary
                </label>
                <input
                  type="text"
                  onChange={handleChange}
                  className="form-control"
                  name="salary"
                  value={employee.salary || ""}
                  id="salary"
                ></input>
              </div>
              <div className="mb-3">
                <div>
                  <label className="form-label fw-bold">Count</label>
                  <div className="form-check form-check-inline ">
                    <label className="form-check-label" htmlFor="first">
                      First
                    </label>
                    <input
                      className="form-check-input"
                      name="count"
                      type="checkbox"
                      value="first"
                      id="first"
                      checked={employee.count?.includes("first") || false}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-check form-check-inline">
                    <label className="form-check-label" htmlFor="second">
                      Second
                    </label>
                    <input
                      className="form-check-input"
                      name="count"
                      type="checkbox"
                      value="second"
                      id="second"
                      checked={employee.count?.includes("second") || false}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-check form-check-inline">
                    <label className="form-check-label" htmlFor="third">
                      Third
                    </label>
                    <input
                      className="form-check-input"
                      name="count"
                      type="checkbox"
                      value="third"
                      id="third"
                      checked={employee.count?.includes("third") || false}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <button className="btn btn-info">Add</button>
            </form>
          </div>
          <table className="table table-bordered mt-5 caption-top">
            <caption>
              <h2>Employee Data</h2>
            </caption>
            <thead>
              <tr>
                <th>Sr.no</th>
                <th>Employee Name</th>
                <th>Salary</th>
                <th>Count</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {empList.map((user, index) => {
                const { id, ename, salary, count } = user;
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{ename}</td>
                    <td>{salary}</td>
                    <td>{count}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(id)}
                        className="btn btn-danger me-2"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => handleEdit(id)}
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
}

export default App;
