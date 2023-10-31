import React, { useState } from "react";
import SideBar from "../../Components/sidebar/SideBar";
import NavBar from "../../Components/navbar/NavBar";
// import "../../Pages/new/new.scss";
import "./edittourtable.scss";

function EditTourTable({ row }) {
  const [destination, setDestination] = useState(row.destination || "");
  const [title, setTitle] = useState(row.title || "");
  const [discount, setDiscount] = useState(row.discount || "");
  const [price, setPrice] = useState(row.price || "");
  const [duration, setDuration] = useState(row.duration || "");
  const [groupSize, setGroupSize] = useState(row.groupSize || "");

  const handleUpdate = (e) => {
    e.preventDefault();
  };
  return (
    <div className="new">
      <div className="newContainer">
        <div className="top">
          <h1>Add New Tour</h1>
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
