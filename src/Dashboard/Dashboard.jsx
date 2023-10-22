import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./DashboardLayout.css";
import SideProfile from "../Images/sideprofile.png";
import { BiSolidDashboard } from "react-icons/bi";
import { BiSolidLocationPlus } from "react-icons/bi";
import { GiCommercialAirplane } from "react-icons/gi";
import { BsCalendarCheck } from "react-icons/bs";
import { BsUmbrellaFill, BsFillChatDotsFill } from "react-icons/bs";
import { BiSolidCalendarAlt, BiChevronDown, BiLogIn } from "react-icons/bi";
import {
  BiHome,
  BiBarChart,
  BiCog,
  BiSun,
  BiMoon,
  BiUser,
} from "react-icons/bi";
import { AiTwotoneSetting } from "react-icons/ai";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import {} from "react-icons/ai";

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <div className="sidebar">
        <div className="item-top">
          <p>Furaha Moses</p>
          <img src={SideProfile} alt="Profile Image" id="profile-image" />
        </div>
        <ul className="icon-list">
          <li>
            <BiSolidDashboard />
            <a href="/dashboard/home">Dashboard </a>
          </li>

          <li>
            <BiSolidLocationPlus />
            <a href="/dashboard/users">Users</a>
          </li>

          <li>
            <GiCommercialAirplane />
            <Link to="/dashboard/tours">Tour</Link>
          </li>

          <li>
            <BsCalendarCheck />
            <a href="#">Upcoming</a>
          </li>

          <li>
            <BsUmbrellaFill />
            <a href="#">Camps</a>
          </li>

          <li>
            <BiSolidCalendarAlt />
            <a href="#">Calender</a>
          </li>

          <li>
            <BsFillChatDotsFill />
            <a href="#">Chats</a>
          </li>
        </ul>
        <div className="slider-footer">
          <p className="slider-title"> Popular Places </p>
          <p className="slider-text">
            <span className="red-circle"></span> Oiso/Italy{" "}
          </p>
          <p className="slider-text">
            <span className="blue-circle"></span> Maui/German{" "}
          </p>
          <div className="slider">
            <BiChevronDown className="icon1" />
            <p className="slider-text">Show more</p>
          </div>
          <div className="log-out">
            <BiLogIn className="icon2" />
            <Link to="/">
              <p className="slider-text">Log Out</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="content">
        <header>
          <h1>
            <BiHome /> Dashboard
          </h1>
          <nav className="nav-container">
            <ul>
              <AiTwotoneSetting className="large-icon" />
              <BiSolidSun className="large-icon" />
              <p className="dark-mode">Dark Mode</p>
              <BiSolidMoon className="large-icon" />
            </ul>
          </nav>
        </header>

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
