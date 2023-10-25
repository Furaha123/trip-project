import "../CSS/TourList.css";
import Tour1 from "../Images/tour1.jpg";
import Tour2 from "../Images/tour2.jpg";
import Tour3 from "../Images/tour2.jpg";
import Tour4 from "../Images/tour4.jpg";
import Tour5 from "../Images/tour5.jpg";
import Tour6 from "../Images/tour6.jpg";
import Tour7 from "../Images/tour7.jpg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const TourList = () => {
  const tours = [
    {
      id: 1,
      title: "Tour Title 1",
      description: "Description of tour 1",
      country: "Country",
      backdropImage: Tour1,
      duration: "4",
      days: "days",
      sub: "Group Size",
      people: "4 people",
      amount: "$4570.0",
    },
    {
      id: 2,
      title: "Tour Title 2",
      description: "Description of tour 2",
      country: "China ",
      backdropImage: Tour2,
      duration: "5",
      days: "days",
      sub: "Group Size",
      people: "6 people",
      amount: "$5600.0",
    },

    {
      id: 2,
      title: "",
      description: "Description of tour 2",
      country: "Rwanda ",
      backdropImage: Tour3,
      duration: "5",
      days: "days",
      sub: "Group Size",
      people: "6 people",
      amount: "$5600.0",
    },

    {
      id: 2,
      title: "",
      description: "Description of tour 2",
      country: "Gemany",
      backdropImage: Tour4,
      duration: "5",
      days: "days",
      sub: "Group Size",
      people: "6 people",
      amount: "$5600.0",
    },
  ];

  // const [tours, setTours] = useState([]);
  // console.log(tours);
  // const { id } = useParams();
  // useEffect(() => {
  //   fetchTours();
  // }, []);

  // const fetchTours = () => {
  //   axios.get("https://holidayplanner.onrender.com/tour}").then(({ data }) => {
  //     setTours(data);
  //     console.log(data);
  //   });
  // };

  return (
    <section className="section-tour">
      <div className="tour-title">
        <h1>Tour List</h1>
      </div>
      <div className="tour-area">
        <div className=" selection-tour">
          <div>
            <p className="sort">Sort by:</p>
          </div>
          <select class=" filter-tour">
            <option value="">Release Date</option>
            <option value="">Tour Date</option>
            <option value="">Price</option>
            <option value="">Duration</option>
          </select>

          <select class="filter-tour">
            <option value="">Descending</option>
            <option value="">Ascending</option>
          </select>
        </div>
        <div className="side-form">
          <h6 className="title-1">FIND YOUR TOUR</h6>
          <div class="search-tour">
            <input type="text" placeholder="Search Tour" />
          </div>
          <div class="search-tour">
            <input type="text" placeholder="Where To?" />
          </div>
          <div class="search-tour">
            <input
              type="text"
              placeholder="Month"
              list="months"
              id="monthInput"
            />
            <datalist id="months">
              <option value="January"></option>
              <option value="February"></option>
              <option value="March"></option>
              <option value="April"></option>
              <option value="May"></option>
              <option value="June"></option>
              <option value="July"></option>
              <option value="August"></option>
              <option value="September"></option>
              <option value="October"></option>
              <option value="November"></option>
              <option value="December"></option>
            </datalist>
          </div>

          <h6 className="durate"> Duration</h6>
          <div class="search-tour">
            <input type="text" placeholder="Any" />
          </div>
          <div className="price-selection">
            <div className="min-price">
              <p>Min Price</p>
              <input type="number" />
            </div>
            <div className="max-price">
              <p>Max Price</p>
              <input type="number" />
            </div>
          </div>

          <div class="checkbox-selection">
            <div class="checkbox">
              <input type="checkbox" id="cultural" />
              <label for="cultural">Cultural</label>
            </div>
            <div class="checkbox">
              <input type="checkbox" id="adventure" />
              <label for="adventure">Adventure</label>
            </div>
            <div class="checkbox">
              <input type="checkbox" id="historical" />
              <label for="historical">Historical</label>
            </div>
            <div class="checkbox">
              <input type="checkbox" id="seaside" />
              <label for="seaside">Seaside</label>
            </div>
            <div class="checkbox">
              <input type="checkbox" id="discovery" />
              <label for="discovery">Discovery</label>
            </div>
          </div>
          <button>FIND NOW</button>
        </div>
        <div className="tour-mission">
          <div className="mission-details">
            <h1>Why Book with us ?</h1>
            <p>Customer care available 24/7</p>
            <p>Free Travel Insurance </p>
            <p>Hand-picked Tours & Activitie</p>
          </div>
        </div>

        <div className="tour-mission1">
          <div className="">
            <h1>Get A Question ?</h1>
            <p>
              Do not hesitage to give us a call. We are an expert team and we
              are happy to talk to you
            </p>
            <p>holidayplanners@gmail.com </p>
            <p>+123 456 7890</p>
          </div>
        </div>

        <div className="card-container">
          {tours.map((tour, index) => (
            <div key={index} className="card-tour1">
              <img src={tour.backdropImage} alt={`Tour ${index + 1}`} />
              <div className="min-tour">
                <h1 className="italy">{tour.country}</h1>
                <p className="para-1">{tour.title}</p>
                <p className="para-2">{tour.description}</p>
                <div className="periods">
                  <div className="duration">
                    <h3>{tour.duration}</h3>
                    <p className="para-days">{tour.days}</p>
                  </div>
                  <div>
                    <h3 className="group-size">{tour.sub}</h3>
                    <p className="people">{tour.people}</p>
                  </div>
                </div>
                <p className="price">{tour.amount}</p>
                <div>
                  <Link to={`/tour/${tour.id}`} className="book-now-button">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourList;
