import React from "react";
import "../home/Home.scss";
import SideBar from "../../Components/sidebar/SideBar";
import NavBar from "../../Components/navbar/NavBar";
import Widget from "../../Components/widget/Widget";
import Featured from "../../Components/featured/Featured";
import Chart from "../../Components/chart/Chart";
import Table from "../../Components/table/Table";

function Home() {
  return (
    <div className="home">
      <SideBar />
      <div className="homeContainer">
        <NavBar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="tour" />
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
