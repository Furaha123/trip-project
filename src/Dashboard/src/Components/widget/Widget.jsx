import React from "react";
import "./widget.scss";
import { BiSolidUpArrowAlt } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import {
  BsFillCalendar2HeartFill,
  BsAirplaneEngines,
  BsCashCoin,
} from "react-icons/bs";

function Widget({ type, total, tourCount, userCount }) {
  let data;

  // const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <CgProfile
            className="icon4"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0,  0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "booking":
      data = {
        title: "BOOKINGS",
        isMoney: true,
        link: "See all bookings",
        icon: (
          <BsFillCalendar2HeartFill
            className="icon4"
            style={{
              color: "goldenrod",
              backgroundColor: "rgba( 218, 165, 32, 0.2)",
            }}
          />
        ),
      };
      break;
    case "tour":
      data = {
        title: "TOURS",
        isMoney: false,
        link: "See all tours",
        icon: (
          <BsAirplaneEngines
            className="icon4"
            style={{
              color: "#C29D59",
              backgroundColor: "rgba(218, 165, 32, 0.2)",
            }}
          />
        ),
      };
      break;
    case "pending":
      data = {
        title: "PENDING",
        isMoney: true,
        link: "See all pendings",
        icon: (
          <BsCashCoin
            className="icon4"
            style={{
              color: "purple",
              backgroundColor: "rgba( 128, 0, 128, 0.2)",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title01">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {type === "user" ? total : userCount}
          {data.isMoney} {type === "tour" ? total : tourCount}
        </span>

        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage negative">
          <BiSolidUpArrowAlt className="" />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
}

export default Widget;
