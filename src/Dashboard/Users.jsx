import React, { useState } from "react";
import "../CSS/user.css";
import { Link } from "react-router-dom";
import SignUpForm from "./signup";

function Users() {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "test@example.com" },
    { id: 2, name: "James Andrew", email: "test@example.com" },
    { id: 3, name: "Agnes Drew", email: "test@example.com" },
    { id: 4, name: "Paul Gady", email: "test@example.com" },
    { id: 5, name: "Haryy Pooter", email: "test@example.com" },
    { id: 6, name: "James Green", email: "test@example.com" },
  ]);
  const [modal, setModal] = useState(false);

  const handleEdit = (userId) => {
    console.log(`Editing user with ID ${userId}`);
  };

  const handleDelete = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  function openModal() {
    setModal(!modal);
  }
  return (
    <div className="table1">
      <h1>User List</h1>

      <button onClick={openModal} className="user">
        New User
      </button>

      {modal && <SignUpForm openModal={openModal} />}

      <>
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button className="edit">Edit</button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="delete"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    </div>
  );
}

export default Users;
