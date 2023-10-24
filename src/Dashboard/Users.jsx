import React, { useEffect, useState } from "react";
import "../CSS/user.css";
import { Link } from "react-router-dom";
// import SignUpForm from "./signup";
import axios from "axios";

function Users() {
  const [modal, setModal] = useState(false);
  const [SiteUser, SetSiteUser] = useState([]);

  const openModal = () => {
    setModal(!modal);
  };

  const FecthData = async () => {
    try {
      const { data } = await axios.get(
        `https://holidayplanner.onrender.com/auth`
      );
      if (data) {
        console.log(data.data);
        SetSiteUser(data.data);
      }
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    FecthData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://holidayplanner.onrender.com/auth/deleteuser/${id}`
      );

      SetSiteUser((prevUsers) => prevUsers.filter((user) => user._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

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
              <th>ID</th>
            </tr>
          </thead>
          {Array.isArray(SiteUser) ? (
            SiteUser.map((item, index) => (
              <tbody key={index}>
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.fullNames}</td>
                  <td>{item.email}</td>
                  <td>{item._id}</td>
                  <td>
                    <button className="edit">Edit</button>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="delete"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))
          ) : (
            <tbody>
              <tr></tr>
            </tbody>
          )}
        </table>
      </div>
    </>
  );
}

export default Users;
