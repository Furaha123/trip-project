import React from "react";
import SideProfile from "../Images/sideprofile.png";
import { BiSolidDashboard } from "react-icons/bi";
import { BiSolidLocationPlus } from "react-icons/bi";
import { GiCommercialAirplane } from "react-icons/gi";
import { BsCalendarCheck } from "react-icons/bs";
import { BsUmbrellaFill, BsFillChatDotsFill } from "react-icons/bs";
import { BiSolidCalendarAlt, BiChevronDown, BiLogIn } from "react-icons/bi";
import "../CSS/SideBar.css";
import { Link } from "react-router-dom";
const SliderBar = () => {
  return (
    <div className="sidebar-area">
      <div className="item-top">
        <p>Furaha Moses</p>
        <img src={SideProfile} alt="Profile Image" id="profile-image" />
      </div>
      <div className="dashboard-pages">
        <ul className="icon-list">
          <li>
            <BiSolidDashboard />
            <a href="#">Dashboard </a>
          </li>

          <li>
            <BiSolidLocationPlus />
            <a href="#">Location</a>
          </li>

          <li>
            <GiCommercialAirplane />
             <Link to="/dashboard/tour">Tour</Link> 
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
      </div>

      <div className="slider-footer">
        <p className="slider-title"> Popular Places </p>
        <p className="slider-text">
          <span className="red-circle"></span> Oiso/Norway{" "}
        </p>
        <p className="slider-text">
          <span className="blue-circle"></span> Maui/Huawi{" "}
        </p>
        <div className="slider">
          <BiChevronDown className="icon1" />
          <p className="slider-text">Show more</p>
        </div>
        <div className="log-out">
          <BiLogIn className="icon2" />
          <p className="slider-text">Log Out</p>
        </div>
      </div>
    </div>
  );
};

export default SliderBar;
