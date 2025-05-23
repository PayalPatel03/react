import React from "react";

function Employee(props) {
    let {handleChnage,employee}=props
  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-6 mx-auto">
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Name
              </label>
              <input
                type="text"
                name="ename"
                value={employee.ename || ''}
                onChange={handleChnage}
                id="ename"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Post
              </label>
              <input
                type="text"
                  value={employee.post || ''}
                onChange={handleChnage}
                name="post"
                id="post"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Salary
              </label>
              <input
                type="text"
                name="salary"
                id="salary"
                className="form-control"
              />
            </div>
            <button className="btn btn-info">Add Data</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Employee;
