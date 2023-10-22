import React from "react";
import sidelogo from "../Images/white-logo.png";
import { FaTimes } from "react-icons/fa";
import { TiTickOutline } from "react-icons/ti";
import {
  FiMail,
  FiPhone,
  FiTwitter,
  FiInstagram,
  FiFacebook,
} from "react-icons/fi";
import "../CSS/Side.css";

import { Link, NavLink } from "react-router-dom";

function SideNav() {
  return (
    <div className="side-nav">
      <div className="side-logo">
        <img src={sidelogo} alt="sidelogo" />
      </div>
      <div class="nav-list">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>

          <li>
            <a href="/contact">Contact Us</a>
            <TiTickOutline class="dropdown-icon" />
          </li>

          <li>
            <a href="tourlist">TourList</a>
            <TiTickOutline class="dropdown-icon" />
          </li>
          <li>
            <a href="signup">Login</a>
          </li>

          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
        </ul>
      </div>
      <div className="socila-side">
        <FiTwitter />
        <FiInstagram />
        <FiFacebook />
      </div>
    </div>
  );
}

export default SideNav;
