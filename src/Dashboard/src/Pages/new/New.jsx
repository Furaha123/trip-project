import React from "react";
import SideBar from "../../Components/sidebar/SideBar";
import NavBar from "../../Components/navbar/NavBar";
import "./new.scss";
import NewImage from "../new/images/travel.jpeg";
import { AiOutlineCloudUpload } from "react-icons/ai";
function New() {
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
            <form className="form-tour">
              <div className="formInputs">
                <label htmlFor="file">
                  {" "}
                  Image <AiOutlineCloudUpload className="icon5" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <div className="formInputs">
                <label>Destination</label>
                <input type="text" />
              </div>

              <div className="formInputs">
                <label>Title</label>
                <input type="text" />
              </div>

              <div className="formInputs">
                <label>Description</label>
                <input type="text" />
              </div>

              <div className="formInputs">
                <label>Duration</label>
                <input type="number" />
              </div>

              <div className="formInputs">
                <label>GroupSize</label>
                <input type="number" />
              </div>

              <div className="formInputs">
                <label>Price</label>
                <input type="number" />
              </div>

              <div className="formInputs">
                <label>Discount</label>
                <input type="text" />
              </div>

              <div className="formInputs">
                <label>TourType</label>
                <input type="text" />
              </div>

              <div className="formInputs">
                <label>Departure</label>
                <input type="text" />
              </div>

              <div className="formInputs">
                <label>Seats</label>
                <input type="number" />
              </div>

              <div className="formInput">
                <label>From Month</label>
                <input type="date" />
              </div>

              <div className="formInputs">
                <label>To Month</label>
                <input type="date" />
              </div>

              <div className="formInputs">
                <label>DepartureTime</label>
                <input type="text" />
              </div>

              <div className="formInputs">
                <label>Return Time</label>
                <input type="text" />
              </div>

              <div className="formInputs">
                <label>Prince Included</label>
                <input type="text" />
              </div>

              <div className="formInputs">
                <label>Price Not Included</label>
                <input type="text" />
              </div>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;
