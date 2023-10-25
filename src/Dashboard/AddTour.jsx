import React, { useEffect, useState } from "react";
import "../CSS/Tour.css";
import axios from "axios";
import { AiOutlinePlus } from "react-icons/ai";
import { AiTwotoneDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import AddTourForm from "./AddTourForm";

function TourTable() {
  const [modal2, setModal] = useState(false);
  const [data, setData] = useState([]);

  const openModal1 = () => {
    setModal(!modal2);
  };
  const handleRowClick = (index) => {};

  const [showOptions, setShowOptions] = useState(null);

  const deleteTour = async (Id) => {
    try {
      await axios.delete(
        `https://holiday-planner-4lnj.onrender.com/api/v1/tour/delete/${Id}`
      );

      setData(data.filter((user) => user._id !== Id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  useEffect(() => {
    axios
      .get("https://holiday-planner-4lnj.onrender.com/api/v1/tour")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="tour-table-container">
      <div className="tour-head">
        <h2 className="tour-detail">Tour Details</h2>
        <button className="add-tour" onClick={openModal1}>
          <AiOutlinePlus /> Add Tour
        </button>
      </div>
      {modal2 && <AddTourForm openModal={openModal1} />}
      <table className="tour-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Gallery</th>
            <th>Destination</th>
            <th>Country</th>
            <th>Discount</th>
            <th>Price</th>
            <th>Duration</th>
            <th>GroupSize</th>
            <th>Data Ids</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id} onClick={() => handleRowClick(index)}>
              <td>{index + 1}</td> {/* Display and increment ID count */}
              <td>
                <img
                  src={item.backdropImage}
                  alt={`Image for ${item.destination}`}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    display: "block",
                  }}
                />
              </td>
              <td>{item.destination}</td>
              <td>{item.Title}</td>
              <td>{item.Discount}</td>
              <td>{item.Price}</td>
              <td>{item.Duration}</td>
              <td>{item.GroupSize}</td>
              <td>{item._id}</td>
              <td className="td-icons">
                <AiTwotoneDelete className="delete-icon" onClick={deleteTour} />
                <FiEdit className="edit-icon" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TourTable;
