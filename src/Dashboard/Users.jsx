import React, { useEffect, useState } from "react";
import "../CSS/user.css";
import { Link } from "react-router-dom";
import SignUpForm from "./signup";
// import { usestatecontext } from "./ContextProvider";
import axios from "../configuration/axios";

function Users() {
  // const [users, setUsers] = useState([
  //   { id: 1, name: "John Doe", email: "test@example.com" },
  //   { id: 2, name: "James Andrew", email: "test@example.com" },
  //   { id: 3, name: "Agnes Drew", email: "test@example.com" },
  //   { id: 4, name: "Paul Gady", email: "test@example.com" },
  //   { id: 5, name: "Haryy Pooter", email: "test@example.com" },
  //   { id: 6, name: "James Green", email: "test@example.com" },
  // ]);

  //fetching
  // const { users } = usestatecontext();

  const [modal, setModal] = useState(false);

  function openModal() {
    setModal(!modal);
  }

  const [SiteUser, SetSiteUser] = useState([]);
  const FecthData = async () => {
    try {
      // const url = process.env.VITE_SERVER_URL;
      const { data } = await axios.get(
        "https://holiday-planner-4lnj.onrender.com/api/v1/auth/users"
      );
      if (data) {
        console.log({ data });
        SetSiteUser(data);
      }
    } catch (error) {
      console.log({ error });
    }
  };
  useEffect(() => {
    FecthData();
  }, []);

  const handleDelete = async (email) => {
    try {
      await axios.delete(
        `https://holiday-planner-4lnj.onrender.com/api/v1/auth/users/delete/${email}`
      );

      // After successful deletion, update the user list in the state
      SetSiteUser((prevUsers) =>
        prevUsers.filter((user) => user.email !== email)
      );
    } catch (error) {
      console.log(error);
    }
  };

  let id = 1;
  console.log("====================", SiteUser);
  return (
    <>
      <div className="table1">
        <h1>User List</h1>

        <button onClick={openModal} className="user">
          New User
        </button>

        {modal && <SignUpForm openModal={openModal} />}

        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          {SiteUser.map((item, index) => (
            <tbody key={index.id}>
              <tr>
                <td>{id++}</td>
                <td>{item.fullName}</td>
                <td>{item.email}</td>
                <td>
                  <button className="edit">Edit</button>
                  <button
                    onClick={() => handleDelete(item.email)}
                    className="delete"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
}

export default Users;
