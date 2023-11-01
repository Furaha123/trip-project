import React, { useState, useEffect } from "react";
import SideBar from "../sidebar/SideBar";
import NavBar from "../navbar/NavBar";
import "./contactTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

const columns = [
  { field: "NO", headerName: "NO", width: 40 },
  { field: "message", headerName: "Message", width: 170 },
  { field: "reply", headerName: "Reply", width: 300 },
  { field: "dateSent", headerName: "Date Sent", width: 270 },
  { field: "dateReplied", headerName: "Date Sent", width: 270 },
];

function ContactTable() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNmZTc3NzI3NzgzOTU3MGQ2NmQzOGQiLCJlbWFpbCI6ImZ1cmFoYUBnbWFpbC5jb20iLCJpYXQiOjE2OTg4MjE0ODEsImV4cCI6MTY5ODgyNTA4MX0.1WO31yXJF4lyQZlLJL5zodVAu8pqdKc2-WWIGeIyis8";
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios.get(
          "https://holidayplanner.onrender.com/contact",
          config
        );

        if (response.data && response.data.data) {
          const dataWithImagesAndStatus = response.data.data.map(
            (item, index) => ({
              ...item,
              id: index + 1,
              NO: index + 1,
              status: Math.random() < 0.5 ? "Active" : "Pending",
            })
          );
          setRows(dataWithImagesAndStatus);
          //   alert("success");
        }
      } catch (error) {
        console.log("Error fetching data:", error);
        alert(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="contacttable">
      <SideBar />
      <div className="contacts">
        <NavBar />
        <div className="contactdetails">
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            checkboxSelection
            getRowId={(row) => row.id}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactTable;
