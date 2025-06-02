import React from "react";

function Table({ handleDelete, handleEdit, users }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <table className="mt-5 table table-striped">
            <thead className="table-dark">
              <tr>
                <th>Sr.no</th>
                <th>Email</th>
                <th>Password</th>
                <th>Action</th> 
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => {
                let { email, password, id } = user;
                return (
                  <tr key={id}>
                    <td>{idx + 1}</td>
                    <td>{email}</td>
                    <td>{password}</td>
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
    </div>
  );
}

export default Table;
