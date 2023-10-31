import React from "react";
import "./SideBar.scss";
import { BiSolidDashboard, BiLogInCircle } from "react-icons/bi";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { BsFillCalendar2HeartFill } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { SiDwavesystems } from "react-icons/si";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
function SideBar() {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top1">
        <Link to="/dashboard" className="logo-link">
          {" "}
          <span className="logo1" style={{ textDecoration: "none" }}>
            HolidayPlanners
          </span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul className="unlist">
          <p className="title0">MAIN</p>
          <li className="lists">
            <BiSolidDashboard className="icon1" />
            <span className="span1">Dashboard</span>
          </li>
          <p className="title0">List</p>
          <li className="lists">
            <GiCommercialAirplane className="icon1" />
            <Link to="/dashboard/tours" className="tour-link">
              <span className="span1">Tours</span>
            </Link>
          </li>

          <li className="lists">
            <FaUsers className="icon1" />
            <Link to="/dashboard/users" className="tour-link">
              <span className="span1">Users</span>
            </Link>
          </li>
          <p className="title0">services</p>
          <Link to="bookings" style={{ textDecoration: "none" }}>
            <li className="lists">
              <BsFillCalendar2HeartFill className="icon1" />

              <span className="span1">Contacts</span>
            </li>
          </Link>
          <li className="lists">
            <SiDwavesystems className="icon1" />
            <span className="span1">Management</span>
          </li>
          <p className="title0">users</p>
          <li className="lists">
            <IoIosNotifications className="icon1" />
            <span className="span1">Notifications</span>
          </li>

          <li className="lists">
            <CgProfile className="icon1" />
            <span>Profile</span>
          </li>

          <li className="lists">
            <FiSettings className="icon1" />
            <span className="span1">Settings</span>
          </li>

          <li className="lists">
            <BiLogInCircle className="icon1" />
            <span className="span1">Log out</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
}

export default SideBar;
