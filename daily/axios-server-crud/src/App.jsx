import React, { use, useEffect, useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import axios from "axios";
import Table from "./components/Table";
import { Routes } from "react-router-dom";

function App() {
  const URL = "http://localhost:3000/product";
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [editId, setEditId] = useState("");

  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = async () => {
    let res = await axios.get(URL);
    setUsers(res.data);
    setEditId("");
    setUser({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId === "") {
      await axios.post(URL, { ...user, id: String(Date.now()) });
    } else {
      let res = await axios.put(`${URL}/${editId}`, { ...user });
    }
    handleFetch();
    setEditId("");
    setUser({});
  };

  const handleDelete = async (id) => {
    await axios.delete(`${URL}/${id}`);
    handleFetch();
  };
  const handleEdit = (id) => {
    let user = users.find((item) => item.id === id);
    setEditId(id);
    setUser(user);
  };

  console.log(user);

  return (
    <>
      <Header />
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        user={user}
      />
      <Table
        users={users}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />

  
    </>
  );
}

export default App;
