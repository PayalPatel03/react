import React, { useRef, useState } from "react";
import DataTable from "react-data-table-component";

function Table({ handleDelete, handleEdit, users, setUsers }) {
  const searchRef = useRef();
  const [textFilter, setTextFilter] = useState("");

  let usersData = users.filter((user) => {
    return user.email.toLowerCase().includes(textFilter.toLowerCase());
  });

  let columns = [
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Password",
      selector: (row) => row.password,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => {
        return (
          <>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(row.id)}
            >
              Delete
            </button>
            <button
              className="btn btn-warning"
              onClick={() => handleEdit(row.id)}
            >
              Edit
            </button>
          </>
        );
      },
    },
  ];
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <input
          ref={searchRef}
          className="form-control"
            type="text"
            name="search"
            onChange={(e) => setTextFilter(e.target.value)}
          />
          <DataTable
          
            title="User Data"
            data={usersData}
            columns={columns}
            pagination
            selectableRows
            highlightOnHover
            pointerOnHover
            responsive
            fixedHeader
            fixedHeaderScrollHeight="300px"
          />
        </div>
      </div>
    </div>
  );
}

export default Table;
