import { tours } from "../data/tour";

import "../CSS/TourList.css";
import Tour1 from "../Images/tour1.jpg";
import Tour2 from "../Images/tour2.jpg";
import Tour3 from "../Images/tour2.jpg";
import Tour4 from "../Images/tour4.jpg";
import Tour5 from "../Images/tour5.jpg";
import Tour6 from "../Images/tour6.jpg";
import Tour7 from "../Images/tour7.jpg";
import { Link, useParams } from "react-router-dom";
const TourList = () => {
  console.log(tours);
  const {id}=useParams()
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
          {tours.map((e) => (
            <div className="card-tour1">
              <img src={e.image} />
              <div className="min-tour">
                <h1 className="italy"> {e.country}</h1>
                <p className="para-1"> {e.title}</p>
                <p className="para-2">{e.description}</p>
                <div className="periods">
                  <div className="duration">
                    <h3>{e.duration}</h3>
                    <p className="para-days">{e.days}</p>
                  </div>

                  <div>
                    <h3 className="group-size ">{e.sub}</h3>
                    <p className="people">{e.people}</p>
                  </div>
                </div>
                <p className="price">{e.amount}</p>
                <div>
                  <Link to={`/tour/${e.id}`} className="book-now-button">Book Now</Link>
                </div>
              </div>
            </div>
          ))}
          <div className="card-tour1">
            <img src={Tour1} alt="tour1" />

            <div className="min-tour">
              <h1 className="italy">Taly</h1>
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
                  <p className="para-days">4 days</p>
                </div>

                <div>
                  <h3 className="group-size ">GroupSize</h3>
                  <p className="people">4 people</p>
                </div>
              </div>
              <p className="price">$4570.0</p>
              <div>
                <button className="book-now-button">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourList;
