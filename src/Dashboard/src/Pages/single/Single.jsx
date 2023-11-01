import React from "react";
import "./single.scss";
import SideBar from "../../Components/sidebar/SideBar";
import NavBar from "../../Components/navbar/NavBar";
import profile from "../../Pages/single/images/profile2.jpeg";
import Chart from "../../Components/chart/Chart";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import CustomTable from "../../Components/table/Table";

function Single() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`https://holidayplanner.onrender.com/auth/${userId}`)
      .then((response) => {
        setUser(response.data);
      });
  }, [userId]);

  return (
    <div className="single">
      <SideBar />
      <div className="singleContainer">
        <NavBar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit </div>
            <div className="title22">Information</div>
            <div className="item">
              <img src={profile} alt="profile" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">{user?.fullName}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email</span>
                  <span className="itemValue">{user?.email}</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Role</span>
                  <span className="itemValue">{user?.role}</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Location</span>
                  <span className="itemValue">{user?.location}</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">RWANDA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User spending " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Single;
