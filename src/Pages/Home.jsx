import { SlLocationPin } from "react-icons/sl";
import { SlCalender } from "react-icons/sl";
import AboutImage from "../Images/airportview.jpg";
import Travel from "../Images/travel.jpg";
import { useState } from "react";

import Tour1 from "../Images/tour1.jpg";
import Tour2 from "../Images/tour2.jpg";
import Tour3 from "../Images/tour3.jpg";
import Tour4 from "../Images/tour4.jpg";
import Tour5 from "../Images/tour5.jpg";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
const Home = () => {
  const slide = [
    {
      image: Tour1,
      country: "Italy",
      duration: "20 days",
      groupSize: "50+ people",
      price: "$699",
    },

    {
      image: Tour2,
      country: "Germany",
      duration: "20 days",
      groupSize: "50+ people",
      price: "$699",
    },

    {
      image: Tour3,
      country: "India",
      duration: "20 days",
      groupSize: "50+ people",
      price: "$699",
    },
  ];
  return (
    <>
      <section className="section-home">
        <div className="center-words">
          <h1>Enjyoy the Travel with</h1>
          <h4> Holiday Planners</h4>
          <p className="description">
            "Escape to paradise on your dream holiday trip. Embrace the sun,
            sea, and adventure as you explore new horizons. Relax on sandy
            beaches, savor exotic cuisine"
          </p>
        </div>

        <div className="data-filters">
          <div>
            <SlLocationPin class="icon" />
            <input type="text" placeholder="WHERE TO?" class="filter-input" />
          </div>
          <div>
            <SlCalender className="icon" />
            <select class="filter-select">
              <option value="">WHEN?</option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
          </div>
          <select class="filter-select">
            <option value="">CULTURE</option>
            <option value="">ADVENTURE</option>
            <option value="">HISTORICAL</option>
            <option value="">SEASIDE</option>
            <option value="">DISCOVERY</option>
          </select>
          <button class="find-button">FIND NOW</button>
        </div>
      </section>

      <section className="section-about">
        <div className="about-section">
          <div className="image-container">
            <div className="outer-image">
              <img src={AboutImage} alt="Outer Image" />
              <div className="inner-image">
                <img src={Travel} alt="Inner Image" />
              </div>
            </div>
          </div>
          <div className="about-description">
            <h1 className="title">About Us</h1>
            <h1 className="sub-title">Plan Your Trip With Us</h1>
            <p className="mountain-text">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts . Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean. A small river named Duden flows by their
              place and supplies it with the necessary regelialia. Mountain
              destinations often provide a respite from the hustle and bustle of
              urban life. They are places to disconnect from technology and
              reconnect with the natural world. The silence of the mountains,
              interrupted only by the sounds of wind, birds, and rustling
              leaves, can be a truly therapeutic experience.
            </p>
            <button className="styled-button">Read More</button>
          </div>
        </div>
      </section>

      <section className="tour-section">
        <div className="tour-area">
          <div className="tour-head">
            <h1 className="title-one"> Amazingn Tours</h1>
            <p className="title-tour">
              Trending, <span> Best Selling Tours </span>And Fun Destinations
            </p>
          </div>
          <div className="next-buttons">
            <p>Prev</p>
            <p>Next</p>
          </div>
        </div>
        <div id="card-div">
          {slide.map((tour, index) => (
            <div className="card-1">
              <img
                src={tour.image}
                alt="tour1"
                style={{ height: "16rem", width: "17rem" }}
              />
              <span className="image-text">45%</span>
              <div>
                <h1 className="italy">{tour.country}</h1>
                <p className="para-1">
                  Holiday Planners help you travel the world easliy
                </p>
                <p className="para-2">
                  Whether it's exploring a bustling city, hiking through serene
                  natural landscapes,,,,,
                </p>
                <div className="periods">
                  <div className="duration">
                    <h3>Duration</h3>
                    <p className="para-days">{tour.duration}</p>
                  </div>

                  <div>
                    <h3 className="group-size ">GroupSize</h3>
                    <p className="people">{tour.groupSize}</p>
                  </div>
                </div>
                <p className="price">{tour.price}</p>
                <div>
                  <button className="book-now-button">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
