import React, { useState, useEffect } from "react";
import axios from "axios";
import "./tour.scss";
import { DataGrid } from "@mui/x-data-grid";
import SideBar from "../../Components/sidebar/SideBar";
import NavBar from "../../Components/navbar/NavBar";
import { MdDelete } from "react-icons/md";
import { BiSolidEditAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import EditTourTable from "./EditTourTble";

const columns = [
  { field: "NO", headerName: "NO", width: 40 },

  { field: "destination", headerName: "Destination", width: 120 },
  { field: "title", headerName: "Title", width: 120 },
  {
    field: "discount",
    headerName: "Discount",
    width: 90,
  },
  {
    field: "price",
    headerName: "Price",
    type: "number",
    width: 40,
  },
  { field: "duration", headerName: "Duration", width: 120 },

  {
    field: "groupSize",
    headerName: "GroupS",
    type: "text",
    width: 80,
  },

  {
    field: "_id",
    headerName: "IDS",
    width: 100,
  },

  {
    field: "image",
    headerName: "Gallery",
    width: 120,
    renderCell: (params) => (
      <div className="image-cell">
        <img
          src={params.row.image}
          alt={params.row.title}
          className="tour-image"
        />
      </div>
    ),
  },

  {
    field: "status",
    headerName: "Status",
    width: 120,
    renderCell: (params) => (
      <div className={`cellWithStatus ${params.row.status}`}>
        {params.row.status}
      </div>
    ),
  },
];

function DataTable() {
  const [rows, setRows] = useState([]);

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 90,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div className="viewButton1">
              <BiSolidEditAlt onClick={() => editTour(params.row)} />
            </div>
            <div className="deleteButton1" onClick={handleDelete}>
              <MdDelete />
            </div>
          </div>
        );
      },
    },
  ];
  const [edit, setedit] = useState(false);
  const [selectedTour, setSelected] = useState(null);
  function editTour(row) {
    setSelected(row);
    setedit(!edit);
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNmZTc3NzI3NzgzOTU3MGQ2NmQzOGQiLCJlbWFpbCI6ImZ1cmFoYUBnbWFpbC5jb20iLCJpYXQiOjE2OTg4NDQ5NDksImV4cCI6MTY5ODg0ODU0OX0.gE1xvdV05I2XHgwWNLu7PWgPMJymwsD1OX_bWDDWw-w";
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const response = await axios.get(
          "https://holidayplanner.onrender.com/tour",
          config
        );

        if (response.data && response.data.data) {
          const dataWithImagesAndStatus = response.data.data.map(
            (item, index) => ({
              ...item,
              NO: index + 1,
              status: Math.random() < 0.5 ? "Active" : "Pending",
            })
          );
          console.log(dataWithImagesAndStatus);
          setRows(dataWithImagesAndStatus);
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const accessToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNmZTc3NzI3NzgzOTU3MGQ2NmQzOGQiLCJlbWFpbCI6ImZ1cmFoYUBnbWFpbC5jb20iLCJpYXQiOjE2OTg4MjE0ODEsImV4cCI6MTY5ODgyNTA4MX0.1WO31yXJF4lyQZlLJL5zodVAu8pqdKc2-WWIGeIyis8";
      await axios.delete(
        `https://holidayplanner.onrender.com/tour/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      setRows((prevRows) => prevRows.filter((row) => row._id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="tourtable">
      <SideBar />
      <div className="tourtableContainer">
        <NavBar />
        <div className="datatable">
          {edit && <EditTourTable row={selectedTour} />}
          <Link to="/dashboard/users/new">
            <button className="new-button">Add New Tour</button>
          </Link>
          <DataGrid
            rows={rows}
            columns={columns.concat(actionColumn)}
            pageSize={5}
            checkboxSelection
            getRowId={(row) => row._id}
          />
        </div>
      </div>
    </div>
  );
}

export default DataTable;
