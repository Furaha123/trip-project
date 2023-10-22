import React, { useState } from "react";
import "../CSS/Tour.css";

function TourTable() {
  const data = [
    {
      id: 1,
      country: "Italy",
      duration: "4 days",
      groupsize: "6 people",
      price: "$200.00",
      status: "booked",
    },
    {
      id: 2,
      country: "Germany",
      duration: "4 days",
      groupsize: "6 people",
      price: "$200.00",
      status: "unbooked",
    },
    {
      id: 3,
      country: "India",
      duration: "4 days",
      groupsize: "6 people",
      price: "$200.00",
      status: "booked",
    },
    {
      id: 4,
      country: "France",
      duration: "5 days",
      groupsize: "8 people",
      price: "$250.00",
      status: "unbooked",
    },
    {
      id: 5,
      country: "Spain",
      duration: "6 days",
      groupsize: "5 people",
      price: "$220.00",
      status: "booked",
    },
  ];

  const [showOptions, setShowOptions] = useState(null);

  const handleRowClick = (index) => {
    setShowOptions(showOptions === index ? null : index);
  };

  const renderOptionsDropdown = (index) => {
    if (showOptions === index) {
      return (
        <div className="options-dropdown">
          <div className="option">Edit</div>
          <div className="option">Delete</div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="tour-table-container">
    <h2 className="tour-detail">Tour Details</h2>
      <table className="tour-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Country</th>
            <th>Duration</th>
            <th>Group Size</th>
            <th>Price</th>
            <th>Status</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id} onClick={() => handleRowClick(index)}>
              <td>{item.id}</td>
              <td>{item.country}</td>
              <td>{item.duration}</td>
              <td>{item.groupsize}</td>
              <td>{item.price}</td>
              <td className={item.status === "booked" ? "booked" : "unbooked"}>
                {item.status}
              </td>
              <td className="options">
                <div className="options-icon">...</div>
                {renderOptionsDropdown(index)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TourTable;
