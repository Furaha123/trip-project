import React from "react";
import "./feature.scss";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import { CircularProgressbar } from "react-circular-progressbar";
import { LiaAngleUpSolid } from "react-icons/lia";
import "react-circular-progressbar/dist/styles.css";

function Featured() {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="titl"> Total Bookings</h1>
        <BsThreeDotsVertical fontSize="small" />
      </div>

      <div className="bottom1">
        <div className="featuredChart">
          <CircularProgressbar value={70} text="70%" strokeWidth={5} />
        </div>
        <p className="titl">Total Bookings made today</p>
        <p className="amount1">$400.0</p>
        <p className="desc">
          Previous Bookings processing. Last Payments may not be included
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <AiOutlineDown fontSize="small" />
              <div className="resultAmount">$12.54k</div>
            </div>
          </div>

          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <LiaAngleUpSolid fontSize="small" />
              <div className="resultAmount">$12.54k</div>
            </div>
          </div>

          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <LiaAngleUpSolid fontSize="small" />
              <div className="resultAmount">$12.54k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
