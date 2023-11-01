import React, { useState } from "react";
import SideBar from "../../Components/sidebar/SideBar";
import NavBar from "../../Components/navbar/NavBar";
// import "../../Pages/new/new.scss";
import axios from "axios";
import "./edittourtable.scss";
import { SiAxios } from "react-icons/si";

function EditTourTable({ row }) {
  const [destination, setDestination] = useState(row.destination || "");
  const [title, setTitle] = useState(row.title || "");
  const [discount, setDiscount] = useState(row.discount || "");
  const [price, setPrice] = useState(row.price || "");
  const [duration, setDuration] = useState(row.duration || "");
  const [groupSize, setGroupSize] = useState(row.groupSize || "");

  const handleUpdate = (e) => {
    e.preventDefault();
    const uppdateTour = {
      destination: destination,
      title: title,
      discount: discount,
      price: price,
      duration: duration,
      groupSize: groupSize,
    };

    const accessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNmZTc3NzI3NzgzOTU3MGQ2NmQzOGQiLCJlbWFpbCI6ImZ1cmFoYUBnbWFpbC5jb20iLCJpYXQiOjE2OTg4MjE0ODEsImV4cCI6MTY5ODgyNTA4MX0.1WO31yXJF4lyQZlLJL5zodVAu8pqdKc2-WWIGeIyis8";
    axios
      .patch(
        `https://holidayplanner.onrender.com/tour/update/${row._id}`,
        uppdateTour,

        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        alert("success");
        window.location.reload();
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="new">
      <div className="newContainer">
        <div className="top">
          <h1>Edit Tour</h1>
        </div>
        <div className="bottom1">
          <div className="right">
            <form action="" onSubmit={handleUpdate}>
              <div className="formInput">
                <label>Destination</label>
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>

              <div className="formInput">
                <label>Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="formInput">
                <label>Duration</label>
                <input
                  type="number"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                />
              </div>

              <div className="formInput">
                <label>GroupSize</label>
                <input
                  type="number"
                  value={groupSize}
                  onChange={(e) => setGroupSize(e.target.value)}
                />
              </div>

              <div className="formInput">
                <label>Price</label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>

              <div className="formInput">
                <label>Discount</label>
                <input
                  type="text"
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                />
              </div>

              <button className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditTourTable;
