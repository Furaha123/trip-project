import React from "react";
import "../home/Home.scss";
import SideBar from "../../Components/sidebar/SideBar";
import NavBar from "../../Components/navbar/NavBar";
import Widget from "../../Components/widget/Widget";
import Featured from "../../Components/featured/Featured";
import Chart from "../../Components/chart/Chart";
import Table from "../../Components/table/Table";
import { useState, useEffect } from "react";

function Home() {
  const [userCount, setUserCount] = useState(0);
  const [tourCount, setTourCount] = useState(0);
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNmZTc3NzI3NzgzOTU3MGQ2NmQzOGQiLCJlbWFpbCI6ImZ1cmFoYUBnbWFpbC5jb20iLCJpYXQiOjE2OTg4NDQ5NDksImV4cCI6MTY5ODg0ODU0OX0.gE1xvdV05I2XHgwWNLu7PWgPMJymwsD1OX_bWDDWw-w";
    setAccessToken(token);
  }, []);

  useEffect(() => {
    fetch("https://holidayplanner.onrender.com/auth", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUserCount(data.userCount);
      })
      .catch((error) => {
        console.error("Error fetching user count: ", error);
      });

    fetch("https://holidayplanner.onrender.com/tour", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setTourCount(data.tourCount);
      })
      .catch((error) => {
        console.error("Error fetching tour count: ", error);
      });
  }, [accessToken]);

  return (
    <div className="home">
      <SideBar />
      <div className="homeContainer">
        <NavBar />
        <div className="widgets">
          <Widget type="user" total={userCount} />
          <Widget type="tour" total={tourCount} />
          <Widget type="booking" />
          <Widget type="pending" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Booking) " aspect={2 / 1} />
        </div>
      </div>
    </div>
  );
}

export default Home;
