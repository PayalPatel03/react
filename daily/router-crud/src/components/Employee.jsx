import React from "react";

function Employee(props) {
  const { handleChange, employee, handleSubmit } = props;

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-md-6 mx-auto">
          <form onSubmit={handleSubmit}>
            <h2>Employee Data</h2>

            <div className="mb-3">
              <label htmlFor="ename" className="form-label">Name</label>
              <input
                type="text"
                name="ename"
                id="ename"
                className="form-control"
                value={employee.ename}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="post" className="form-label">Post</label>
              <input
                type="text"
                name="post"
                id="post"
                className="form-control"
                value={employee.post}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="salary" className="form-label">Salary</label>
              <input
                type="text"
                name="salary"
                id="salary"
                className="form-control"
                value={employee.salary}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-info">Add Data</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Employee;
