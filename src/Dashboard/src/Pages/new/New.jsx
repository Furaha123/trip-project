import React, { useState } from "react";
import SideBar from "../../Components/sidebar/SideBar";
import NavBar from "../../Components/navbar/NavBar";
import "./new.scss";
import NewImage from "../new/images/travel.jpeg";
import { AiOutlineCloudUpload } from "react-icons/ai";
import axios from "axios";

function New() {
  const [formData, setFormData] = useState({
    image: null,
    destination: "",
    title: "",
    description: "",
    duration: "",
    groupSize: "",
    price: "",
    discount: "",
    tourType: "",
    departure: "",
    seats: "",
    fromMonth: "",
    toMonth: "",
    departureTime: "",
    returnTime: "",
    priceIncluded: "",
    priceNotIncluded: "",
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();

    for (const key in formData) {
      form.append(key, formData[key]);
    }

    try {
      const response = await axios.post(
        "https://holidayplanner.onrender.com/tour",
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Tour added successfully:", response.data);
    } catch (error) {
      console.error("Error adding tour:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file,
    });
  };

  return (
    <div className="new1">
      <SideBar />
      <div className="newContainer1">
        <NavBar />
        <div className="top2">
          <h1 className="title-tour">Add New Tour</h1>
        </div>
        <div className="bottom1">
          <div className="left1">
            <img src={NewImage} alt="" />
          </div>
          <div className="right">
            <form className="form-tour" onSubmit={handleFormSubmit}>
              <div className="formInputs">
                <label htmlFor="file" className="upload-image">
                  {" "}
                  Image <AiOutlineCloudUpload className="icon5" />
                </label>
                <input
                  type="file"
                  id="file"
                  name="image"
                  onChange={handleImageUpload}
                />
              </div>

              <div className="formInputs">
                <label>Destination</label>
                <input
                  type="text"
                  name="destination"
                  value={formData.destination}
                  onChange={handleInputChange}
                />
              </div>

              <div className="formInputs">
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                />
              </div>

              <div className="formInputs">
                <label>Descriptoin</label>
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                />
              </div>

              <div className="formInputs">
                <label>Duration</label>
                <input
                  type="text"
                  name="duration"
                  value={formData.duration}
                  onChange={handleInputChange}
                />
              </div>

              <div className="formInputs">
                <label>GroupSize</label>
                <input
                  type="text"
                  name="groupSize"
                  value={formData.groupSize}
                  onChange={handleInputChange}
                />
              </div>
              <div className="formInputs">
                <label>Price</label>
                <input
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                />
              </div>

              <div className="formInputs">
                <label>Discount</label>
                <input
                  type="text"
                  name="discount"
                  value={formData.discount}
                  onChange={handleInputChange}
                />
              </div>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;
