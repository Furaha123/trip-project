import React from "react";
import "./single.scss";
import SideBar from "../../Components/sidebar/SideBar";
import NavBar from "../../Components/navbar/NavBar";
import profile from "../../Pages/single/images/profile2.jpeg";
import Chart from "../../Components/chart/Chart";

import CustomTable from "../../Components/table/Table";

function Single() {
  return (
    <div className="single">
      <SideBar />
      <div className="singleContainer">
        <NavBar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit </div>
            <div className="title">Information</div>
            <div className="item">
              <img src={profile} alt="profile" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">Moses Dev</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">mosesdev@gmail.com</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 232 434 23</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">KIGALI-RWANDA</span>
                </div>

                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">RWANDA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending (Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <div className="title">Last Bookings</div>
          <CustomTable />
        </div>
      </div>
    </div>
  );
}

export default Single;
