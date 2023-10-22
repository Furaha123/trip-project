import { useParams } from "react-router-dom";
import "../CSS/TourDetail.css";
import { tours } from "../data/tour";
const TourDetail = () => {
  const { id } = useParams();
  const tour = tours.find((e) => e.id == id);
  console.log(tour);

  const { country } = tour;
  return (
    <>
      <section className="section-tourdetails">
        <div className="background-image">
          <h1 className="name-indian"> {country}</h1>
        </div>

        <div className="detail-information">
          <div class="info-button">Tour Plan</div>
          <div class="vertical-line"></div>
          <div class="info-button">Location</div>
          <div class="vertical-line"></div>
          <div class="info-button">Gallery</div>
          <div class="vertical-line"></div>
          <div class="info-button">Review</div>
        </div>
        <div className="tour-area1">
          <div className="side-form1">
            <h6 className="title-2">BOOK THIS TOUR</h6>
            <div class="search-tour1">
              <input type="text" placeholder="Full Name" required />
            </div>
            <div class="search-tour1">
              <input type="email" placeholder="Email" />
            </div>
            <div class="search-tour1">
              <input type="email" placeholder="Confirm Email" />
            </div>

            <div class="search-tour1">
              <input type="number" placeholder="phone" />
            </div>

            <div class="search-tour1">
              <input type="date" placeholder="mm/dd/yyy" />
            </div>

            <div class="search-tour1">
              <input type="number" placeholder="Number Of Tickets" />
            </div>
            <div class="checkbox">
              <input type="checkbox" id="cultural" />
              <label for="cultural">Check Availability</label>
            </div>
            <button>FIND NOW</button>
          </div>
          <div className="tour-mission2">
            <div className="mission-details">
              <h1>Why Book with us ?</h1>
              <p>Customer care available 24/7</p>
              <p>Free Travel Insurance </p>
              <p>Hand-picked Tours & Activitie</p>
            </div>
          </div>

          <div className="tour-mission3">
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

          <div className="tour-detailed">
            <div className="para23">
              <h1>
                {" "}
                A wonderful serenity has taken possession of my entire soul
              </h1>

              <div className="circle">
                <p>$12000</p>
                <p>Per person</p>
              </div>
            </div>
            <div className="planned-trip">
              <p class="trip-duration">2 days</p>
              <p class="trip-duration">6 People</p>
              <p class="trip-participants">18 </p>
              <p class="trip-destination">Greece</p>
              <p class="trip-destination"> Discovery</p>
            </div>
            <div className="trip-description">
              <p>
                {" "}
                I should be incapable of drawing a single stroke at the present
                moment; and yet I feel that I never was a greater artist than
                now. When, while the lovely valley teems with vapour around me,
                and the meridian sun strikes the upper surface of the
                impenetrable foliage of my trees, and but a few stray gleams.{" "}
              </p>
            </div>

            <table>
              <thead>
                <tr>
                  <th>Greece</th>
                  <th>LoremIpsum</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Destination</td>
                  <td>Greece</td>
                </tr>
                <tr>
                  <td>Departure</td>
                  <td>LoremIpsum</td>
                </tr>
                <tr>
                  <td>Departure Time</td>
                  <td>9:00am</td>
                </tr>
                <tr>
                  <td>Return Time</td>
                  <td>10:12pm</td>
                </tr>
                <tr>
                  <td>Dress Code</td>
                  <td>Light Jacket</td>
                </tr>
                <tr>
                  <td>Price Included</td>
                  <td>Well-styled columns</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default TourDetail;
