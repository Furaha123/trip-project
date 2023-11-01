import React, { useState, useEffect } from "react";
import axios from "axios";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import EditTourTable from "../datatable/EditTourTble";
const handleDelete = async (id) => {
  try {
    const accessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNmZTc3NzI3NzgzOTU3MGQ2NmQzOGQiLCJlbWFpbCI6ImZ1cmFoYUBnbWFpbC5jb20iLCJpYXQiOjE2OTg4MjE0ODEsImV4cCI6MTY5ODgyNTA4MX0.1WO31yXJF4lyQZlLJL5zodVAu8pqdKc2-WWIGeIyis8";
    await axios.delete(
      `https://holidayplanner.onrender.com/auth/deleteuser/${id}`,
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

const actionColumn = [
  {
    field: "action",
    headerName: "Action",
    width: 130,
    renderCell: (params) => (
      <div className="cellAction">
        <Link
          to={`/dashboard/single/${params.row._id}`}
          style={{ textDecoration: "none" }}
        >
          <div className="viewButton">View</div>
        </Link>

        <div
          className="deleteButton"
          onClick={() => handleDelete(params.row._id)}
        >
          delete
        </div>
      </div>
    ),
  },
];
const columns = [
  { field: "NO", headerName: "NO", width: 40 },

  { field: "fullNames", headerName: "Names", width: 150 },
  { field: "email", headerName: "Your Email", width: 150 },
  { field: "location", headerName: "Location", width: 100 },
  { field: "role", headerName: "User Role", width: 100 },

  {
    field: "password",
    headerName: "Password",
    type: "number",
    width: 100,
  },
  {
    field: "phoneNumber",
    headerName: "Phone Number",
    type: "number",
    width: 105,
  },
  {
    field: "_id",
    headerName: "IDS",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    // renderCell: (params) => {
    //   return (
    //     <>
    //       <span>{params.row.fullName}</span>
    //       <p>{params.row._id}</p>
    //     </>
    //   );
    // },
  },
  {
    field: "status",
    headerName: "Status",
    width: 100,
    renderCell: (params) => (
      <div className={`cellWithStatus ${params.row.status}`}>
        {params.row.status}
      </div>
    ),
  },
];

function DataTable() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNmZTc3NzI3NzgzOTU3MGQ2NmQzOGQiLCJlbWFpbCI6ImZ1cmFoYUBnbWFpbC5jb20iLCJpYXQiOjE2OTg4MjE0ODEsImV4cCI6MTY5ODgyNTA4MX0.1WO31yXJF4lyQZlLJL5zodVAu8pqdKc2-WWIGeIyis8";
        const response = await axios.get(
          "https://holidayplanner.onrender.com/auth",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
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
  const totalUsers = rows.length;
  console.log(totalUsers);
  return (
    <div className="datatable">
      <DataGrid
        className="datagrid"
        rows={rows}
        columns={columns.concat(actionColumn)}
        pageSize={5}
        checkboxSelection
        getRowId={(row) => row._id}
        isRowSelectable={(params) => !!params.data && !!params.data._id}
      />
    </div>
  );
}

export default DataTable;
