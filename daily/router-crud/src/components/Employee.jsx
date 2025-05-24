import React from "react";

const Employee = (props) => {
  let { onChange, onSubmit, employee } = props;

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto mt-5">
            <form onSubmit={onSubmit}>
              <h2
                className="text-center fw-bold"
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}
              >
                Employee Data
              </h2>
              <div className="mb-3">
                <label htmlFor="Name" className="form-label fw-semibold ">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="ename"
                  name="ename"
                  value={employee.ename || ""}
                  onChange={onChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Post" className="form-label  fw-semibold ">
                  Post
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="post"
                  name="post"
                  value={employee.post || ""}
                  onChange={onChange}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label  fw-semibold "
                >
                  Salary
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="salary"
                  name="salary"
                  value={employee.salary || ""}
                  onChange={onChange}
                />
              </div>
              <button type="submit" className="btn btn-dark">
                Add Data
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Employee;
